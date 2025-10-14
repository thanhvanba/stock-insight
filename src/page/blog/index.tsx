import { useState } from "react";
import {
  Input,
  Button,
  Card,
  Row,
  Col,
  Tag,
  Typography,
  Pagination,
  Image,
} from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Text } = Typography;

const { Title, Paragraph } = Typography;

export default function BlogPage() {
  const categories = [
    "Tất cả",
    "Phân tích kỹ thuật",
    "Chiến lược đầu tư",
    "Tâm lý giao dịch",
    "Tin tức thị trường",
  ];
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const articles = [
    {
      id: 1,
      title: "Cách sử dụng RSI để xác định điểm mua bán hiệu quả",
      description:
        "RSI là một trong những chỉ báo kỹ thuật phổ biến nhất. Bài viết này sẽ hướng dẫn bạn cách sử dụng RSI một cách chính xác...",
      category: "Phân tích kỹ thuật",
      date: "10/11/2025",
      image: "/rsi-indicator-chart.png",
    },
    {
      id: 2,
      title: "Chiến lược giao dịch theo xu hướng cho người mới",
      description:
        "Giao dịch theo xu hướng là một trong những chiến lược đơn giản và hiệu quả nhất. Tìm hiểu cách áp dụng chiến lược này...",
      category: "Chiến lược đầu tư",
      date: "09/11/2025",
      image: "/trend-following-strategy-chart.jpg",
    },
    {
      id: 3,
      title: "Tâm lý nhà đầu tư và cách kiểm soát cảm xúc",
      description:
        "Cảm xúc là kẻ thù lớn nhất của nhà đầu tư. Học cách nhận diện và kiểm soát cảm xúc để đưa ra quyết định đúng đắn...",
      category: "Tâm lý giao dịch",
      date: "08/11/2025",
      image: "/investor-psychology-concept.jpg",
    },
    {
      id: 4,
      title: "Phân tích dòng tiền thông minh trong thị trường chứng khoán",
      description:
        "Dòng tiền thông minh là chìa khóa để xác định cổ phiếu có tiềm năng. Tìm hiểu cách theo dõi và phân tích dòng tiền...",
      category: "Phân tích kỹ thuật",
      date: "07/11/2025",
      image: "/money-flow-analysis-chart.jpg",
    },
    {
      id: 5,
      title: "Quản lý vốn: Bí quyết sống còn của nhà đầu tư",
      description:
        "Quản lý vốn đúng cách giúp bạn bảo vệ tài khoản và tối đa hóa lợi nhuận. Khám phá các nguyên tắc quản lý vốn hiệu quả...",
      category: "Chiến lược đầu tư",
      date: "06/11/2025",
      image: "/capital-management-concept.jpg",
    },
    {
      id: 6,
      title: "Nhận định thị trường tuần này: Cơ hội và rủi ro",
      description:
        "Phân tích tổng quan về diễn biến thị trường trong tuần qua và dự báo xu hướng trong tuần tới...",
      category: "Tin tức thị trường",
      date: "05/11/2025",
      image: "/stock-market-overview-chart.jpg",
    },
  ];

  const filteredArticles =
    selectedCategory === "Tất cả"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          background: "#263c54",
          color: "#fff",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <Title style={{ color: "#fff", marginBottom: 16 }}>Bài viết</Title>
        <Paragraph style={{ color: "#e6f7ff", fontSize: 16 }}>
          Kiến thức và phân tích chuyên sâu về thị trường chứng khoán
        </Paragraph>
      </section>

      {/* Search and Filter Section */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "2rem 1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[16, 16]} align="middle" justify="space-between">
            <Col xs={24} md={8}>
              <Input
                placeholder="Tìm kiếm bài viết..."
                prefix={<SearchOutlined />}
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={24} md={16}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`
                        px-3 py-1.5 text-sm rounded-md border transition-all duration-200
                        ${
                          isActive
                            ? "bg-green-500 text-white border-green-600 hover:bg-green-700"
                            : "bg-white text-green-700 border-green-300 hover:bg-green-100"
                        }
                      `}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Articles Grid */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[24, 24]}>
            {filteredArticles.map((article) => (
              <Col xs={24} md={12} lg={8} key={article.id}>
                <Card
                  hoverable
                  cover={
                    <Image
                      src={article.image}
                      alt={article.title}
                      className="max-h-48"
                      style={{
                        objectFit: "cover",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        width: "100%",
                        display: "block",
                      }}
                    />
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <Tag color="green">{article.category}</Tag>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {article.date}
                    </Text>
                  </div>
                  <Title level={5}>{article.title}</Title>
                  <Paragraph ellipsis={{ rows: 3 }}>
                    {article.description}
                  </Paragraph>
                  <Link to={`/bai-viet/${article.id}`}>
                    <button className="inline-flex items-center gap-1 text-green-600 font-medium hover:text-green-700 transition-colors">
                      Đọc tiếp
                      <ArrowRightOutlined className="w-4 h-4" />
                    </button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination */}
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Pagination
              current={1}
              total={30}
              pageSize={6}
              showSizeChanger={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
