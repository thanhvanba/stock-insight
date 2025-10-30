// VNIndexWidget.tsx
import { Button, Col, Row } from "antd";
import { useLiveVnIndex } from "./useLiveIndex";

const nf0 = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 0 });
const nf2 = new Intl.NumberFormat("vi-VN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const pf2 = (x: number) => `${(x * 100).toFixed(2)}%`;

export default function VNIndexWidget() {
  const { data, error, loading } = useLiveVnIndex(
    "https://bgapidatafeed.vps.com.vn/getlistindexdetail/10,02,11,03",
    { intervalMs: 3000 }
  );

  if (loading) return <div>Đang tải…</div>;
  if (error) return <div style={{ color: "red" }}>Lỗi: {String(error)}</div>;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "68px",
        backgroundColor: "rgba(20, 20, 25, 0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
        padding: "12px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Row
        gutter={[16, 0]}
        justify="start"
        align="middle"
        style={{ width: "calc(100% - 150px)", height: "100%" }}
      >
        {data?.map((r) => {
          const diff = r.cIndex - r.oIndex; // có dấu
          const sign = diff > 0 ? "up" : diff < 0 ? "down" : "flat";
          const delta = Math.sign(diff) * r.parsed.delta; // gán dấu cho độ lớn trong ot
          const deltaPct = Math.sign(diff) * r.parsed.deltaPct;

          const color =
            sign === "up" ? "#16a34a" : sign === "down" ? "#dc2626" : "#6b7280";

          const refIndex = r.cIndex - delta;

          return (
            <Col
              key={r.mc}
              xs={6}
              sm={6}
              md={6}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                  marginBottom: "4px",
                }}
              >
                <span style={{ fontWeight: "bold", color: "white" }}>
                  {r.meta.name}
                </span>
                <span style={{ color }}>{nf2.format(r.cIndex)}</span>
                <span style={{ color }}>
                  {sign === "up" ? "▲" : sign === "down" ? "▼" : "—"}{" "}
                  {nf2.format(delta)} | {pf2(deltaPct)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  alignItems: "center",
                }}
              >
                <p style={{ color: "#eee" }}>
                  {nf0.format(r.vol)}{" "}
                  <span style={{ color: "orange" }}>CP |</span>
                </p>
                <p style={{ color: "#eee" }}>
                  {nf0.format(r.value)}{" "}
                  <span style={{ color: "orange" }}>Tỷ</span>
                </p>
              </div>
            </Col>
          );
        })}
      </Row>

      <a
        href="https://banggia.vps.com.vn/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          type="primary"
          size="large"
          style={{
            height: "40px",
            fontSize: "14px",
            fontWeight: "bold",
            borderRadius: "6px",
            backgroundColor: "transparent",
            border: "1px solid white",
            color: "white",
            padding: "0 20px",
          }}
        >
          Tư vấn mở tài khoản
        </Button>
      </a>
    </div>
  );
}
