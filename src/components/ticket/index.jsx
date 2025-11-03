import { Spin } from "antd";
import { useEffect, useRef, useState } from "react";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import api from "../news/services/api";

const PopularSymbols = () => {
  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.getPopularSymbolsToday();
        setSymbols(Array.isArray(data) ? data : []);
      } catch (err) {
        setSymbols([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="small" />
      </div>
    );
  }

  if (symbols.length === 0) return null;

  // Nhân đôi để tạo loop mượt
  const duplicatedSymbols = [...symbols, ...symbols];

  return (
    <>
     <div
        style={{
          marginBottom: "8px",
          fontSize: "12px",
          color: "#fff",
          textAlign: "center",
        }}
      >
        Mã cổ phiếu được nhắc đến nhiều nhất hôm nay
      </div>
      <div
        style={{
          height: "60px",
          overflow: "hidden",
          backgroundColor: "#f0f0f0",
          whiteSpace: "nowrap",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "marquee 20s linear infinite",
            padding: "0 16px",
          }}
        >
          {duplicatedSymbols.map((s, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex", // ← quan trọng: dùng flex ngang
                alignItems: "center", // căn giữa dọc
                gap: "4px", // khoảng cách giữa text và icon
                fontSize: "16px",
                padding: "0 12px",
                fontWeight: "500",
                color: s.color || "#000",
                whiteSpace: "nowrap", // đảm bảo không xuống dòng
                lineHeight: "60px",
              }}
            >
              {s.symbol}:
              {s.color === "#E11E00" ? (
                <IoArrowDownOutline style={{ color: s.color, flexShrink: 0 }} />
              ) : (
                <IoArrowUpOutline style={{ color: s.color, flexShrink: 0 }} />
              )}
              {s.points}
            </span>
          ))}
        </div>

        {/* CSS animation */}
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default PopularSymbols;
