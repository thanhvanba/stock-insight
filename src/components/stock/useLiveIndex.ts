// useLiveVnIndex.ts
import { useEffect, useRef, useState } from "react";

export type RawRow = {
  id: number;
  sequence: number;
  mc: string; // "10", "11", "02", "03"
  vol: number;
  value: number;
  time: string; // "HH:mm:ss"
  status: string; // "O" (Open session?), ...
  ot: string; // "Δ|Δ%|value|adv|dec|unch"
  cIndex: number;
  oIndex: number;
};

export type IndexRow = RawRow & {
  parsed: {
    delta: number;
    deltaPct: number; // 0.7 for 0.70%
    adv: number;
    dec: number;
    unch: number;
    otValue: number; // giá trị giao dịch trong 'ot'
  };
  meta: {
    code: string;
    name: string;
  };
};

const INDEX_META: Record<string, { code: string; name: string }> = {
  "10": { code: "VNINDEX", name: "VN-INDEX" },
  "02": { code: "HNX", name: "HNX-INDEX" },
  "11": { code: "VN30", name: "VN30-INDEX" },
  "03": { code: "UPCOM", name: "UPCOM" },
};

function parseOt(ot: string) {
  // "11.84|0.70%|6910993.257|124|161|54"
  const [dRaw, pRaw, vRaw, aRaw, d2Raw, uRaw] = ot.split("|");
  const toNum = (s?: string) =>
    s ? Number(String(s).replace(/[%_,]/g, "")) : 0;
  return {
    delta: toNum(dRaw),
    deltaPct: toNum(pRaw) / 100,
    otValue: toNum(vRaw),
    adv: Math.trunc(toNum(aRaw)),
    dec: Math.trunc(toNum(d2Raw)),
    unch: Math.trunc(toNum(uRaw)),
  };
}

export function useLiveVnIndex(
  url: string,
  { intervalMs = 3000, maxBackoffMs = 30000 } = {}
) {
  const [data, setData] = useState<IndexRow[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);
  const timerRef = useRef<number | null>(null);
  const backoffRef = useRef(0);
  const lastSigRef = useRef<string>("");

  const clearTimer = () => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    let aborted = false;

    const schedule = (ms: number) => {
      clearTimer();
      timerRef.current = window.setTimeout(tick, ms);
    };

    const fingerprint = (rows: any) =>
      JSON.stringify(rows?.map((r: any) => [r.mc, r.sequence, r.time]));

    const tick = async () => {
      // Giảm tải khi tab ẩn
      if (document.hidden) {
        schedule(Math.min(Math.max(intervalMs * 4, 10000), 60000));
        return;
      }
      const controller = new AbortController();
      try {
        const res = await fetch(url, {
          signal: controller.signal,
          cache: "no-store",
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as RawRow[];

        // Dedup để tránh re-render thừa
        const sig = fingerprint(json);
        if (sig !== lastSigRef.current) {
          lastSigRef.current = sig;
          const enhanced: IndexRow[] = json.map((r) => ({
            ...r,
            parsed: parseOt(r.ot),
            meta: INDEX_META[r.mc] ?? { code: r.mc, name: r.mc },
          }));
          // sort theo mc cho UI ổn định
          //enhanced.sort((a, b) => a.mc.localeCompare(b.mc));
          setData(enhanced);
        }

        setError(null);
        setLoading(false);
        backoffRef.current = 0;
        schedule(intervalMs);
      } catch (e: any) {
        if (aborted) return;
        setError(e);
        setLoading(false);
        backoffRef.current = backoffRef.current
          ? Math.min(backoffRef.current * 2, maxBackoffMs)
          : 2000;
        schedule(backoffRef.current);
      }
    };

    tick();
    return () => {
      aborted = true;
      clearTimer();
    };
  }, [url, intervalMs, maxBackoffMs]);

  return { data, error, loading };
}
