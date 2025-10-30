import React, { useEffect, useRef, useState, useCallback } from "react";
import { Spin, Alert } from "antd";
import api from "../news/services/api";

const PopularSymbols = () => {
  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  // Fetch dữ liệu
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await api.getPopularSymbolsToday();
        if (mounted) {
          setSymbols(Array.isArray(res) ? res : []);
        }
      } catch (err) {
        if (mounted) {
          setError(err);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      mounted = false;
    };
  }, []);

  // Animation cuộn ngang mượt
  const animate = useCallback(() => {
  if (!containerRef.current || !contentRef.current) return;

  const container = containerRef.current;
  const content = contentRef.current;

    const containerWidth = container.offsetWidth;
  const contentWidth = content.scrollWidth;

    // Always animate, even if content fits
    let startTime = null;
  const duration = 20000; // 20 giây cho 1 vòng

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = (elapsed / duration) % 1; // Loop forever
    const translateX = -progress * Math.max(contentWidth, containerWidth * 2); // Ensure movement

    content.style.transform = `translateX(${translateX}px)`;
  animationRef.current = requestAnimationFrame(step);
  };

  animationRef.current = requestAnimationFrame(step);
  }, []);

  // Khởi chạy animation
  // useEffect(() => {
  //   if (!loading && !error && symbols.length > 0) {
  //     const timer = setTimeout(() => animate(), 100);
  //     return () => clearTimeout(timer);
  //   }
  //   return () => {
  //     if (animationRef.current) cancelAnimationFrame(animationRef.current);
  //   };
  // }, [loading, error, symbols, animate]);

  // // Cleanup
  // useEffect(() => {
  //   return () => {
  //     if (animationRef.current) cancelAnimationFrame(animationRef.current);
  //   };
  // }, []);

  // === Render ===
  if (loading) {
    return (
      <div
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          width: "100%",
        }}
      >
        <Spin size="small" />
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff1f0",
          color: "#ff4d4f",
          width: "100%",
          fontSize: "14px",
        }}
      >
        ⚠️ Lỗi tải dữ liệu
      </div>
    );
  }

  if (symbols.length === 0) {
    return (
      <div
        style={{
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          color: "#888",
          width: "100%",
          fontSize: "14px",
        }}
      >
        Không có dữ liệu
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={{
        height: "60px",
        width: "100%",
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#f0f0f0",
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        ref={contentRef}
        style={{
          display: "inline-block",
          transition: "transform 0s linear",
          paddingLeft: "16px", // optional: padding đầu
        }}
      >
        {symbols.map((symbol, index) => (
          <span
            key={`${symbol.symbol}-${index}`}
            style={{
              fontSize: "16px",
              padding: "0 16px",
              display: "inline-block",
              color: symbol.color || "#000",
              fontWeight: "500",
              lineHeight: "60px", // căn giữa dọc
            }}
          >
            {symbol.symbol} - {symbol.points}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PopularSymbols;

