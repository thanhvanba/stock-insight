// api.ts
export const API_BASE = "http://localhost:3000";

export async function getJson(url: string) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  const ct = res.headers.get("content-type") || "";
  if (!ct.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Expected JSON, got ${ct}. Body: ${text.slice(0,80)}`);
  }
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
