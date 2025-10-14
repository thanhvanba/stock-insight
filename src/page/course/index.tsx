import { Card, Typography, Row, Col, Image, Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  VideoCameraOutlined,
  TeamOutlined,
  BookOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function CoursePage() {
  return (
    <main>
      <section
        style={{
          background: "#263c54",
          color: "#fff",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <Title style={{ color: "#fff", marginBottom: 16 }}>
          Khóa học đầu tư
        </Title>
        <Paragraph style={{ color: "#e6f7ff", fontSize: 16 }}>
          Nâng cao kỹ năng đầu tư với các khóa học chuyên nghiệp
        </Paragraph>
      </section>

      {/* Paid Course Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/technical-analysis-course-professional-charts.jpg"
                  alt="Paid Course"
                  className="object-cover"
                />
              </div>
            </Col>

            <Col xs={24} md={12}>
              <Tag
                className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                color="green"
              >
                Có phí
              </Tag>
              <h3 className="text-balance text-2xl font-bold leading-tight mt-6">
                Phân tích kỹ thuật cơ bản đến nâng cao
              </h3>
              <p className="mb-6 text-pretty leading-relaxed">
                Khóa học toàn diện về phân tích kỹ thuật, từ kiến thức nền tảng
                đến chiến lược giao dịch chuyên nghiệp. Phù hợp cho cả người mới
                và nhà đầu tư có kinh nghiệm muốn nâng cao kỹ năng.
              </p>

              <ul className="mb-6 space-y-2">
                {[
                  "40+ giờ video bài giảng",
                  "Hệ thống bài tập thực hành",
                  "Hỗ trợ trực tiếp từ giảng viên",
                  "Chứng chỉ hoàn thành",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleOutlined className="mt-0.5 h-4 w-4 shrink-0 !text-[#0bce80]" />
                    <Text className="text-gray-700">{item}</Text>
                  </li>
                ))}
              </ul>

              <Row gutter={16}>
                <Col span={12}>
                  <button className="w-full py-2 rounded-lg text-white bg-[#263c54] hover:bg-[#263c54]/90">
                    <VideoCameraOutlined className="mr-2 h-4 w-4" />
                    Xem giới thiệu
                  </button>
                </Col>
                <Col span={12}>
                  <button className="w-full py-2 rounded-lg text-white bg-[#0bce80] hover:bg-[#0bce80]/90">
                    Đăng ký ngay
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Course Modules */}
          <div className="mt-20">
            <h2 className="text-[#0bce80] text-xl font-bold text-foreground md:text-2xl mb-4">
              Nội dung khóa học
            </h2>
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "Module 1: Kiến thức nền tảng",
                  hours: "8 giờ",
                  lessons: [
                    "Giới thiệu về phân tích kỹ thuật",
                    "Các loại biểu đồ",
                    "Xu hướng & đường xu hướng",
                    "Hỗ trợ và kháng cự",
                  ],
                },
                {
                  title: "Module 2: Chỉ báo kỹ thuật",
                  hours: "10 giờ",
                  lessons: [
                    "Moving Averages (MA, EMA)",
                    "RSI và Stochastic",
                    "MACD và Bollinger Bands",
                    "Volume và OBV",
                  ],
                },
                {
                  title: "Module 3: Mô hình nến",
                  hours: "8 giờ",
                  lessons: [
                    "Các mô hình nến đơn",
                    "Các mô hình nến kép",
                    "Mô hình đảo chiều",
                    "Mô hình tiếp diễn",
                  ],
                },
                {
                  title: "Module 4: Chiến lược giao dịch",
                  hours: "14 giờ",
                  lessons: [
                    "Xây dựng hệ thống giao dịch",
                    "Quản lý vốn & rủi ro",
                    "Tâm lý giao dịch",
                    "Thực hành demo",
                  ],
                },
              ].map((mod, i) => (
                <Col xs={24} md={12} key={i}>
                  <Card bordered hoverable>
                    <Title level={4}>{mod.title}</Title>
                    <Paragraph className="text-gray-500 mb-2">
                      <ClockCircleOutlined className="mr-2" />
                      {mod.hours}
                    </Paragraph>
                    <ul className="list-disc pl-5 text-gray-600">
                      {mod.lessons.map((l, j) => (
                        <li key={j}>{l}</li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* Free Course Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12} className="order-2 md:order-1">
              <Tag
                className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                color="geekblue"
              >
                Miễn phí
              </Tag>
              <h3 className="text-balance text-2xl font-bold leading-tight mt-6">
                Kiến thức cho nhà đầu tư mới
              </h3>
              <p className="mb-6 text-pretty leading-relaxed">
                Khóa học miễn phí giúp người mới hiểu rõ cách hoạt động của thị
                trường chứng khoán và bắt đầu hành trình đầu tư đúng đắn.
              </p>

              <ul className="mb-6 space-y-2">
                {[
                  "15+ video bài giảng cơ bản",
                  "Hiểu về thị trường chứng khoán",
                  "Hoàn toàn miễn phí",
                  "Học mọi lúc mọi nơi",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleOutlined className="mt-0.5 h-4 w-4 shrink-0 !text-[#0bce80]" />
                    <Text className="text-gray-700">{item}</Text>
                  </li>
                ))}
              </ul>

              <button className="w-full py-2 rounded-lg text-white bg-[#263c54] hover:bg-[#263c54]/90">
                <BookOutlined className="mr-2 h-4 w-4" />
                Học ngay miễn phí
              </button>
            </Col>

            <Col xs={24} md={12} className="order-1 md:order-2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/beginner-investment-education-learning.jpg"
                  alt="Free Course"
                  className="object-cover"
                />
              </div>
            </Col>
          </Row>

          {/* Free Course Modules */}
          <div className="mt-20">
            <h2 className="text-[#0bce80] text-xl font-bold text-foreground md:text-2xl mb-4">
              Nội dung khóa học miễn phí
            </h2>
            <Row gutter={[24, 24]}>
              {[
                {
                  title: "Phần 1: Giới thiệu",
                  count: "5 video",
                  lessons: [
                    "Thị trường chứng khoán là gì?",
                    "Cách mở tài khoản",
                    "Các loại lệnh cơ bản",
                    "Phí giao dịch & thuế",
                  ],
                },
                {
                  title: "Phần 2: Phân tích cơ bản",
                  count: "5 video",
                  lessons: [
                    "Đọc báo cáo tài chính",
                    "Các chỉ số định giá",
                    "Phân tích ngành",
                    "Chọn cổ phiếu tốt",
                  ],
                },
                {
                  title: "Phần 3: Quản lý rủi ro",
                  count: "5 video",
                  lessons: [
                    "Nguyên tắc quản lý vốn",
                    "Đa dạng hóa danh mục",
                    "Tâm lý nhà đầu tư",
                    "Sai lầm thường gặp",
                  ],
                },
              ].map((part, i) => (
                <Col xs={24} md={8} key={i}>
                  <Card bordered hoverable>
                    <Title level={4}>{part.title}</Title>
                    <Paragraph className="text-gray-500 mb-2">
                      <VideoCameraOutlined className="mr-2" />
                      {part.count}
                    </Paragraph>
                    <ul className="list-disc pl-5 text-gray-600">
                      {part.lessons.map((l, j) => (
                        <li key={j}>{l}</li>
                      ))}
                    </ul>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#172f3b] text-white text-center">
        <TeamOutlined className="!text-[#0bce80] text-5xl mb-6" />
        <h2 className="text-2xl font-bold text-foreground md:text-3xl mb-4">
          Tham gia cộng đồng học viên
        </h2>
        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Hơn 500 học viên đã tin tưởng và đạt được kết quả tích cực với các
          khóa học của chúng tôi.
        </p>
        <button className="px-6 py-2 rounded-lg text-black bg-[#0bce80] hover:bg-[#0bce80]/90">
          <VideoCameraOutlined className="mr-2 h-4 w-4" />
          Xem khóa học trên YouTube
        </button>
      </section>
    </main>
  );
}
