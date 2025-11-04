//ts-nocheck
import React from "react";
import { useLiveVnIndex, INDEX_META } from "./useLiveVnIndex";


const nf0 = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });
const nf2 = new Intl.NumberFormat("vi-VN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const pf2 = (x: number) => `${(x * 100).toFixed(2)}%`;

export default function VNIndexWidget() {
  const { data, error, loading } = useLiveVnIndex(
    "https://bgapidatafeed.vps.com.vn/getlistindexdetail/10,02,11,03"
    { intervalMs: 3000 }
  );

  if (loading) return <div>Đang tải…</div>;
  if (error) return <div style={{ color: "red" }}>Lỗi: {String(error)}</div>;


  return (
    <div
      style={{
        display: "grid",
        gap: 12,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
    >
      {data?.map((r,idx) => {
        const up = r.parsed.delta >= 0;
        const meta = r.meta ?? INDEX_META[r.mc] ?? { code: r.mc, name: r.mc };
        return (
          <div
            key={idx}
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
          >
            <div style={{ fontWeight: 700 }}>{meta.name}</div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                color: up ? "#16a34a" : "#dc2626",
              }}
            >
              {nf2.format(r.cIndex)}{" "}
              <small style={{ fontSize: 14, fontWeight: 600 }}>
                {up ? "▲" : "▼"} {nf2.format(r.parsed.delta)} (
                {pf2(r.parsed.deltaPct)})
              </small>
            </div>
            <div style={{ fontSize: 12, opacity: 0.8, marginTop: 4 }}>
              GT: {nf0.format(r.value)} | KL: {nf0.format(r.vol)} | {r.time}
            </div>
            <div style={{ fontSize: 12, marginTop: 6 }}>
              ↑ {r.parsed.adv} &nbsp;↓ {r.parsed.dec} &nbsp;= {r.parsed.unch}
            </div>
          </div>
        );
      })}
    </div>
  );
}
