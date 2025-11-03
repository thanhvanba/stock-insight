// import { Card, Button, Typography, Row, Col, Tag } from "antd";
// import {
//   CalendarOutlined,
//   ArrowDownOutlined,
//   ArrowUpOutlined,
//   FileTextOutlined,
// } from "@ant-design/icons";

// const { Title, Paragraph, Text } = Typography;

// export default function NewsPage() {
//   const insights = [
//     {
//       id: 1,
//       date: "10/11/2025",
//       title: "VN-Index tăng điểm mạnh, thanh khoản cải thiện đáng kể",
//       content:
//         "Thị trường chứng khoán Việt Nam ghi nhận phiên tăng điểm ấn tượng với VN-Index tăng 15 điểm lên 1,250. Thanh khoản đạt 18,500 tỷ đồng, cao nhất trong 2 tuần qua. Nhóm cổ phiếu ngân hàng và chứng khoán dẫn dắt thị trường với nhiều mã tăng trần.",
//       trend: "up",
//     },
//     {
//       id: 2,
//       date: "09/11/2025",
//       title: "Dòng tiền chảy mạnh vào nhóm cổ phiếu công nghệ",
//       content:
//         "Nhóm cổ phiếu công nghệ thu hút dòng tiền mạnh mẽ trong phiên giao dịch hôm nay. FPT, CMG, và VGI đều tăng trên 3%. Các nhà đầu tư tổ chức đang tích cực mua vào nhóm này với kỳ vọng về kết quả kinh doanh quý 4 khả quan.",
//       trend: "up",
//     },
//     {
//       id: 3,
//       date: "08/11/2025",
//       title: "Áp lực bán tăng ở vùng kháng cự 1,250 điểm",
//       content:
//         "VN-Index gặp áp lực bán mạnh khi tiến gần vùng kháng cự 1,250 điểm. Khối ngoại bán ròng 450 tỷ đồng, tập trung vào nhóm cổ phiếu vốn hóa lớn. Nhà đầu tư nên thận trọng và chờ đợi tín hiệu rõ ràng hơn trước khi gia tăng vị thế.",
//       trend: "down",
//     },
//     {
//       id: 4,
//       date: "07/11/2025",
//       title: "Cổ phiếu ngân hàng: Cơ hội hay rủi ro?",
//       content:
//         "Nhóm cổ phiếu ngân hàng đang giao dịch ở mức định giá hấp dẫn với P/E trung bình chỉ 8-9 lần. Tuy nhiên, lo ngại về chất lượng tài sản và tăng trưởng tín dụng chậm lại khiến nhiều nhà đầu tư còn thận trọng. Cần theo dõi kết quả kinh doanh quý 4 để có đánh giá chính xác hơn.",
//       trend: "neutral",
//     },
//     {
//       id: 5,
//       date: "06/11/2025",
//       title: "Phân tích kỹ thuật: VN-Index test lại vùng hỗ trợ 1,220",
//       content:
//         "Về mặt kỹ thuật, VN-Index đang test lại vùng hỗ trợ quan trọng 1,220 điểm. Nếu giữ được vùng này, thị trường có thể phục hồi và tiến về vùng 1,250-1,260. Ngược lại, nếu mất vùng hỗ trợ, chỉ số có thể điều chỉnh về 1,200 điểm.",
//       trend: "neutral",
//     },
//     {
//       id: 6,
//       date: "05/11/2025",
//       title: "Khối ngoại mua ròng trở lại sau 5 phiên bán",
//       content:
//         "Sau 5 phiên bán ròng liên tiếp, khối ngoại đã quay trở lại mua ròng 280 tỷ đồng trong phiên hôm nay. Dòng tiền tập trung vào các cổ phiếu bluechip như VNM, VIC, và HPG. Đây là tín hiệu tích cực cho thị trường trong ngắn hạn.",
//       trend: "up",
//     },
//   ];

//   const getTrendIcon = (trend: string) => {
//     switch (trend) {
//       case "up":
//         return <ArrowUpOutlined style={{ fontSize: 20, color: "#52c41a" }} />;
//       case "down":
//         return <ArrowDownOutlined style={{ fontSize: 20, color: "#f5222d" }} />;
//       default:
//         return <FileTextOutlined style={{ fontSize: 20, color: "#8c8c8c" }} />;
//     }
//   };

//   const getTrendTag = (trend: string) => {
//     switch (trend) {
//       case "up":
//         return <Tag color="green">Tích cực</Tag>;
//       case "down":
//         return <Tag color="red">Tiêu cực</Tag>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <main>
//       {/* Hero Section */}
//       <section
//         style={{
//           background: "#263c54",
//           color: "#fff",
//           padding: "4rem 1rem",
//           textAlign: "center",
//         }}
//       >
//         <Title style={{ color: "#fff", marginBottom: 16 }}>
//           Điểm tin thị trường
//         </Title>
//         <Paragraph style={{ color: "#e6f7ff", fontSize: 16 }}>
//           Cập nhật và phân tích thị trường chứng khoán hàng ngày
//         </Paragraph>
//       </section>

//       {/* Filter Section */}
//       <section
//         style={{
//           background: "#f5f5f5",
//           padding: "2rem 1rem",
//           borderBottom: "1px solid #ddd",
//         }}
//       >
//         <div className="flex flex-wrap justify-center gap-3">
//           <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition">
//             <CalendarOutlined />
//             Tất cả
//           </button>

//           <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition">
//             Tuần này
//           </button>

//           <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg transition">
//             Tháng này
//           </button>

//           <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg transition">
//             <ArrowUpOutlined />
//             Tích cực
//           </button>

//           <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition">
//             <ArrowDownOutlined />
//             Tiêu cực
//           </button>
//         </div>
//       </section>

//       {/* Insights List */}
//       <section style={{ padding: "4rem 1rem" }}>
//         <div style={{ maxWidth: 800, margin: "0 auto" }}>
//           <Row gutter={[24, 24]}>
//             {insights.map((insight) => (
//               <Col span={24} key={insight.id}>
//                 <Card hoverable>
//                   <Row gutter={16} align="top">
//                     <Col>{getTrendIcon(insight.trend)}</Col>
//                     <Col flex="auto">
//                       <div
//                         style={{
//                           display: "flex",
//                           gap: 8,
//                           alignItems: "center",
//                           marginBottom: 8,
//                         }}
//                       >
//                         <Text type="secondary">{insight.date}</Text>
//                         {getTrendTag(insight.trend)}
//                       </div>
//                       <Title level={4} style={{ marginBottom: 12 }}>
//                         {insight.title}
//                       </Title>
//                       <Paragraph>{insight.content}</Paragraph>
//                     </Col>
//                   </Row>
//                 </Card>
//               </Col>
//             ))}
//           </Row>

//           {/* Load More */}
//           <div style={{ textAlign: "center", marginTop: 48 }}>
//             <Button> Xem thêm điểm tin </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// @ts-nocheck
import NewsPages from "../../components/news/pages";

export default function NewsPage() {
  return (
    <>
      <main>
        <section
          style={{
            background: "#263c54",
            color: "#fff",
            padding: "4rem 1rem",
            textAlign: "left",
          }}
        >
          <NewsPages />
        </section>
      </main>
    </>
  );
}
