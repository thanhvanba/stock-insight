import { Row, Col, Typography, Card } from "antd";
import {
  ArrowUpOutlined,
  UsergroupAddOutlined,
  TrophyOutlined,
  AimOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
export default function AboutPage() {
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
        <Title style={{ color: "#fff", marginBottom: 16 }}>Giới thiệu</Title>
        <Paragraph style={{ color: "#e6f7ff", fontSize: 16 }}>
          Nền tảng cập nhật và phân tích thị trường chứng khoán giúp bạn nắm bắt
          xu hướng đầu tư hiệu quả.
        </Paragraph>
      </section>

      <section style={{ padding: "4rem 1rem", background: "#f5f5f5" }}>
        <div className="container mx-auto px-4">
          <Row gutter={32} align="middle" justify="center">
            <Col xs={24} md={12}>
              <div
                style={{
                  height: 500,
                  overflow: "hidden",
                  borderRadius: 12,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src="/professional-asian-financial-advisor-in-office.jpg"
                  alt="Anh Tuấn"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <h2 className="font-medium text-5xl mb-6">Về Anh Tuấn</h2>
              <div className="space-y-3 text-lg text-gray-700">
                <p>
                  Xin chào, tôi là Tuấn - một nhà đầu tư chứng khoán với hơn 10
                  năm kinh nghiệm trong lĩnh vực phân tích kỹ thuật và đầu tư hệ
                  thống.
                </p>
                <p>
                  Hành trình của tôi bắt đầu từ năm 2013, khi tôi còn là một nhà
                  đầu tư mới với nhiều thất bại. Những kinh nghiệm đắng cay đó
                  đã thúc đẩy tôi nghiên cứu sâu về phân tích kỹ thuật, tâm lý
                  thị trường và quản lý rủi ro.
                </p>
                <p>
                  Sau nhiều năm thử nghiệm và tối ưu hóa, tôi đã phát triển một
                  hệ thống đầu tư độc đáo kết hợp giữa công nghệ AI, phân tích
                  kỹ thuật truyền thống và kinh nghiệm thực chiến. Hệ thống này
                  đã giúp tôi đạt được tỷ suất sinh lời ổn định 25-35%/năm trong
                  5 năm qua.
                </p>
                <p className="font-medium">
                  Sứ mệnh của tôi là chia sẻ kiến thức và kinh nghiệm để giúp
                  các nhà đầu tư Việt Nam đầu tư thông minh và bền vững hơn.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <h2 className="text-center text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl">
          Thành tựu nổi bật
        </h2>
        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 32 }}>
          {[
            {
              icon: <ArrowUpOutlined className="!text-[#0bce80]" />,
              value: "10+",
              label: "Năm kinh nghiệm",
            },
            {
              icon: <UsergroupAddOutlined className="!text-[#0bce80]" />,
              value: "500+",
              label: "Học viên đã đào tạo",
            },
            {
              icon: <TrophyOutlined className="!text-[#0bce80]" />,
              value: "25-35%",
              label: "Tỷ suất sinh lời/năm",
            },
            {
              icon: <AimOutlined className="!text-[#0bce80]" />,
              value: "95%",
              label: "Học viên hài lòng",
            },
          ].map((item, i) => (
            <Col xs={24} md={12} lg={6} key={i}>
              <Card bordered hoverable style={{ textAlign: "center" }}>
                <div
                  style={{ fontSize: 32, color: "#1677ff", marginBottom: 16 }}
                >
                  {item.icon}
                </div>
                <h2 style={{ color: "#1677ff" }}>{item.value}</h2>
                <p>{item.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: "4rem 1rem", background: "#f5f5f5" }}>
        <h2 className="text-center text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl">
          Triết lý đầu tư
        </h2>
        <div style={{ maxWidth: 800, margin: "0 auto", marginTop: 32 }}>
          {[
            {
              h2: "1. Đầu tư dựa trên hệ thống, không cảm tính",
              content:
                "Mọi quyết định đầu tư phải dựa trên dữ liệu, phân tích kỹ thuật và tín hiệu rõ ràng từ hệ thống. Loại bỏ cảm xúc khỏi quá trình ra quyết định.",
            },
            {
              h2: "2. Quản lý rủi ro là ưu tiên hàng đầu",
              content:
                "Bảo vệ vốn quan trọng hơn tìm kiếm lợi nhuận. Luôn đặt stop-loss và không bao giờ mạo hiểm quá 2% vốn trong một giao dịch.",
            },
            {
              h2: "3. Kết hợp công nghệ và kinh nghiệm",
              content:
                "Sử dụng AI và công nghệ để phân tích dữ liệu lớn, nhưng kết hợp với kinh nghiệm thực chiến để đưa ra quyết định cuối cùng.",
            },
            {
              h2: "4. Học hỏi không ngừng",
              content:
                "Thị trường luôn thay đổi. Nhà đầu tư thành công là người không ngừng học hỏi, thích nghi và cải thiện hệ thống của mình.",
            },
          ].map((item, i) => (
            <Card key={i} style={{ marginBottom: 24 }}>
              <h2>{item.h2}</h2>
              <p>{item.content}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Investment System Section */}
      <section style={{ padding: "4rem 1rem" }}>
        <h2 className="text-center text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl">
          Hệ thống đầu tư AI
        </h2>
        <div style={{ maxWidth: 800, margin: "0 auto", marginTop: 32 }}>
          <p style={{ fontSize: 16 }}>
            Hệ thống đầu tư của tôi được xây dựng dựa trên 4 trụ cột chính:
          </p>
          <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
            {[
              {
                h2: "Phân tích kỹ thuật",
                content:
                  "Sử dụng các chỉ báo kỹ thuật, mô hình nến, và phân tích xu hướng để xác định điểm vào/ra lệnh tối ưu.",
              },
              {
                h2: "Công nghệ AI",
                content:
                  "Áp dụng machine learning để phân tích dữ liệu lịch sử, nhận diện mô hình và dự đoán xu hướng thị trường.",
              },
              {
                h2: "Phân tích dòng tiền",
                content:
                  "Theo dõi dòng tiền thông minh của các tổ chức lớn để xác định cổ phiếu có tiềm năng tăng trưởng.",
              },
              {
                h2: "Quản lý rủi ro",
                content:
                  "Hệ thống tự động tính toán kích thước vị thế, đặt stop-loss và take-profit dựa trên biến động thị trường.",
              },
            ].map((item, i) => (
              <Col xs={24} md={12} key={i}>
                <Card bordered>
                  <h2>{item.h2}</h2>
                  <p>{item.content}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </main>
  );
}
