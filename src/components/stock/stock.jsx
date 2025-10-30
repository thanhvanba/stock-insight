// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Col, Row, Button } from "antd";

// export default function Stock() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Mapping index code -> name
//   const indexNames = {
//     10: "VN-INDEX",
//     "02": "HNX-INDEX",
//     11: "VN30-INDEX",
//     "03": "UPCOM",
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://bgapidatafeed.vps.com.vn/getlistindexdetail/10,02,11,03"
//         );
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   // Đảm bảo luôn có đủ 4 mục
//   const orderedIds = ["10", "02", "11", "03"];
//   const displayData = Array(4)
//     .fill(null)
//     .map((_, i) => data?.[i] || null);

//   // Hàm định dạng số (ví dụ: 898,809,223)
//   const formatNumber = (num) => {
//     if (!num) return "0";
//     return Number(num).toLocaleString("en-US");
//   };

//   // Hàm render mũi tên và màu sắc dựa vào biến động
//   const renderChange = (change, percent) => {
//     const isPositive = change >= 0;
//     const arrow = isPositive ? "▲" : "▼";
//     const color = isPositive ? "#4caf50" : "#f44336"; // xanh lá / đỏ

//     return (
//       <span style={{ color }}>
//         {arrow} {Math.abs(change)} | {Math.abs(percent).toFixed(2)}%
//       </span>
//     );
//   };

//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: 0,
//         left: 0,
//         width: "100%",
//         height: "68px",
//         backgroundColor: "rgba(20, 20, 25, 0.8)",
//         backdropFilter: "blur(10px)",
//         zIndex: 1000,
//         boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
//         padding: "12px 80px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       <Row
//         gutter={[16, 0]}
//         justify="start"
//         align="middle"
//         style={{ width: "calc(100% - 150px)", height: "100%" }}
//       >
//         {displayData.map((item, index) => {
//           const id = orderedIds[index];
//           const displayName = indexNames[id] || id;
//           if (!item) {
//             return (
//               <Col
//                 key={index}
//                 xs={6}
//                 sm={6}
//                 md={6}
//                 style={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-start",
//                   justifyContent: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "6px",
//                     alignItems: "center",
//                     marginBottom: "4px",
//                   }}
//                 >
//                   <span style={{ fontWeight: "bold", color: "white" }}>
//                     {displayName}
//                   </span>
//                   <span style={{ color: "white" }}>N/A</span>
//                   <span style={{ color: "white" }}>N/A</span>
//                 </div>
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "6px",
//                     alignItems: "center",
//                   }}
//                 >
//                   <span style={{ color: "orange" }}>CP</span>
//                   <span style={{ color: "orange" }}>Tỷ</span>
//                 </div>
//               </Col>
//             );
//           }

//           // Lấy tên chỉ số từ mapping
//           const indexName = indexNames[item.id] || item.id;

//           // Xử lý OT để lấy giá trị thay đổi
//           const otParts = item.ot.split("|");
//           const change = parseFloat(otParts[0]) || 0;
//           const percent = parseFloat(otParts[1]) || 0;

//           return (
//             <Col
//               key={item.id}
//               xs={6}
//               sm={6}
//               md={6}
//               style={{
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "flex-start",
//                 justifyContent: "center",
//               }}
//             >
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "6px",
//                   alignItems: "center",
//                   marginBottom: "4px",
//                 }}
//               >
//                 <span style={{ fontWeight: "bold", color: "white" }}>
//                   {displayName}
//                 </span>
//                 <span
//                   style={{
//                     backgroundColor: change >= 0 ? "#4caf50" : "#f44336",
//                     color: "white",
//                     padding: "2px 6px",
//                     borderRadius: "2px",
//                     fontSize: "12px",
//                   }}
//                 >
//                   {item.cIndex}
//                 </span>
//                 {renderChange(change, percent)}
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   gap: "6px",
//                   alignItems: "center",
//                 }}
//               >
//                 <p style={{ color: "#eee" }}>
//                   {formatNumber(item.vol)}{" "}
//                   <span style={{ color: "orange" }}>CP</span>
//                 </p>
//                 <p style={{ color: "#eee" }}>
//                   {formatNumber(item.value)}{" "}
//                   <span style={{ color: "orange" }}>Tỷ</span>
//                 </p>
//               </div>
//             </Col>
//           );
//         })}
//       </Row>

//       {/* Nút "Xem Bảng Giá" */}
//       <a
//         href="https://banggia.vps.com.vn/"
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{ textDecoration: "none" }}
//       >
//         <Button
//           type="primary"
//           size="large"
//           style={{
//             height: "40px",
//             fontSize: "14px",
//             fontWeight: "bold",
//             borderRadius: "6px",
//             backgroundColor: "transparent",
//             border: "1px solid white",
//             color: "white",
//             padding: "0 20px",
//           }}
//         >
//           Tư vấn mở tài khoản
//         </Button>
//       </a>
//     </div>
//   );
// }
//@ts-ignore
// VNIndexWidget.tsx

import React from "react";
import { useLiveVnIndex } from "./useLiveVnIndex";

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
      {data?.map((r) => {
        const up = r.parsed.delta >= 0;
        return (
          <div
            key={r.mc}
            style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}
          >
            <div style={{ fontWeight: 700 }}>{r.meta.name}</div>
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
