//@ts-nocheck
import {
  ArrowRightOutlined,
  BarChartOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  LineChartOutlined,
  MailOutlined,
  PhoneOutlined,
  SendOutlined,
  TeamOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Image,
  Input,
  message,
  Row,
  Tag,
  Typography,
} from "antd";
import { useEffect, useState } from "react";
import { BsArrowRight, BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaLightbulb, FaPhoneAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import HeroSlider from "../components/HeroSlider";
import VNIndexWidget from "../components/stock";
import { adminAPI } from "../service";
import type { BlogResponse } from "../types/blog";
import AnnounOpen from "./banner/AnnounOpen";
import { CallToActionAI } from "./banner/CTA_AI";
import { CallToActionZalo } from "./banner/CTA_Zalo";

// if (loading)
//   return (
//     <div className="flex justify-center py-16">
//       <Spin size="large" />
//     </div>
//   );

// const articles = [
//   {
//     image: "/stock-market-analysis-chart-.jpg",
//     title: "Phân tích xu hướng thị trường Q1/2025",
//     excerpt:
//       "Nhận định chi tiết về các nhóm ngành tiềm năng và cơ hội đầu tư trong quý đầu năm 2025.",
//     date: "15/01/2025",
//     category: "Phân tích",
//   },
//   {
//     image: "/investment-strategy-planning.png",
//     title: "Chiến lược đầu tư dài hạn hiệu quả",
//     excerpt:
//       "Hướng dẫn xây dựng danh mục đầu tư dài hạn với tỷ suất sinh lời ổn định.",
//     date: "12/01/2025",
//     category: "Chiến lược",
//   },
//   {
//     image: "/technical-analysis-indicators.jpg",
//     title: "Sử dụng chỉ báo kỹ thuật trong giao dịch",
//     excerpt:
//       "Cách kết hợp các chỉ báo kỹ thuật phổ biến để tìm điểm vào lệnh tối ưu.",
//     date: "08/01/2025",
//     category: "Kỹ thuật",
//   },
// ];

const courses = [
  {
    title: "Phân tích kỹ thuật cơ bản đến nâng cao",
    description:
      "Khóa học toàn diện về phân tích kỹ thuật, từ những kiến thức nền tảng đến các chiến lược giao dịch chuyên sâu.",
    type: "Có phí",
    isPaid: true,
    features: [
      "40+ video bài giảng chi tiết",
      "Tài liệu học tập đầy đủ",
      "Hỗ trợ trực tiếp từ giảng viên",
      "Cộng đồng học viên riêng",
    ],
    image: "/technical-analysis-course.png",
  },
  {
    title: "Kiến thức cho nhà đầu tư mới",
    description:
      "Khóa học miễn phí dành cho người mới bắt đầu, giúp bạn hiểu rõ về thị trường chứng khoán và cách đầu tư an toàn.",
    type: "Miễn phí",
    isPaid: false,
    features: [
      "15+ video hướng dẫn cơ bản",
      "Kiến thức nền tảng về TTCK",
      "Cách mở tài khoản giao dịch",
      "Quản lý rủi ro cho người mới",
    ],
    image: "/beginner-investment-course.jpg",
  },
];
export default function HomePage() {
  const { TextArea } = Input;
  const { Title } = Typography;

  const [articles, setArticles] = useState<BlogResponse[]>([]);
  console.log("🚀 ~ articles:", articles);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        setLoading(true);
        const res = await adminAPI.getBlogs();
        console.log("🚀 ~ fetchLatestArticles ~ res:", res);
        // Nếu API trả data theo cấu trúc { data: [...] }
        const data = res.data || [];
        // Có thể sort theo ngày để lấy bài mới nhất
        const sorted = data.sort(
          (a: any, b: any) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        // Lấy 6 bài mới nhất
        setArticles(data);
      } catch (err) {
        console.error("Error fetching latest articles:", err);
        message.error("Không thể tải bài viết mới nhất.");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestArticles();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <HeroSlider />
      
      {/* About Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <h2 className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl mb-3">
                Giới thiệu
              </h2>
              <p className="text-gray-600">
                Với hơn 10 năm kinh nghiệm trong lĩnh vực đầu tư chứng khoán,
                tôi đã phát triển một hệ thống đầu tư độc đáo kết hợp giữa phân
                tích kỹ thuật, công nghệ AI và kinh nghiệm thực chiến.
              </p>
              <p className="text-gray-600">
                Hệ thống của tôi đã giúp hàng trăm nhà đầu tư đạt được mục tiêu
                tài chính của họ thông qua các chiến lược đầu tư thông minh và
                quản lý rủi ro hiệu quả.
              </p>
              <p className="text-gray-800 font-medium">
                Thành tựu: Tỷ suất sinh lời trung bình 25-35%/năm trong 5 năm
                qua
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex">
                  <FaLightbulb size={32} color="#0bce80" />
                  <div className="ml-4">
                    <h2 className="font-medium text-2xl mb-1.5">
                      Tư vấn kinh doanh
                    </h2>
                    <p className="text-gray-600">
                      Hỗ trợ phát triển chiến lược kinh doanh hiệu quả
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <BsFillBookmarkHeartFill size={32} color="#0bce80" />
                  <div className="ml-4">
                    <h2 className="font-medium text-2xl mb-1.5">Kinh nghiệm</h2>
                    <p className="text-gray-600">
                      Hơn 10 năm đầu tư và tư vấn chứng khoán thành công
                    </p>
                  </div>
                </div>
                <Link to="/gioi-thieu">
                  <button className="mt-4 hover:bg-black bg-[#0bce80] border-none px-4 py-2 rounded-3xl hover:text-[#0bce80] text-lg font-medium text-white flex items-center gap-2">
                    Đọc thêm về tôi <ArrowRightOutlined />
                  </button>
                </Link>
                <div className="flex">
                  <FaPhoneAlt size={32} color="#0bce80" />
                  <div className="ml-4">
                    <h2 className="font-medium text-2xl mb-1.5">
                      Liên hệ chúng tôi
                    </h2>
                    <p className="text-gray-600 text-lg">0988777666</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/professional-asian-financial-advisor-portrait.jpg"
                  alt="Anh Tuấn"
                  className="object-cover"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <AnnounOpen />

      {/* Investment Systems */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl">
            Hệ thống đầu tư
          </h2>
          <p className="text-gray-600 mb-12">
            Phương pháp đầu tư đa dạng và hiệu quả được chứng minh qua thời gian
          </p>
          <Row gutter={[24, 24]}>
            {[
              {
                icon: <LineChartOutlined />,
                title: "Hệ thống AI",
                desc: "Phân tích dữ liệu bằng trí tuệ nhân tạo",
              },
              {
                icon: <BarChartOutlined />,
                title: "Amibroker",
                desc: "Công cụ phân tích kỹ thuật chuyên nghiệp",
              },
              {
                icon: <LineChartOutlined />,
                title: "Biểu đồ dòng tiền",
                desc: "Theo dõi dòng tiền của các tổ chức",
              },
              {
                icon: <TeamOutlined />,
                title: "Kinh nghiệm thực chiến",
                desc: "10+ năm kinh nghiệm đầu tư thực tế",
              },
            ].map((item, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <Card
                  hoverable
                  className="border-2 hover:border-yellow-400 transition-all"
                >
                  <div className="text-4xl text-[#0bce80] mb-4">
                    {item.icon}
                  </div>
                  <Title level={4}>{item.title}</Title>
                  <p>{item.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <CallToActionAI />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl mb-3">
              Những thứ bạn cần để bắt đầu hành trình đầu tư
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Đã được tổng hợp đầy đủ trong các khóa học dưới đây
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="overflow-hidden border-border bg-card transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-balance text-2xl font-bold leading-tight">
                      {course.title}
                    </h3>
                    <Tag
                      className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                      color={`${course.isPaid ? "green" : "geekblue"}`}
                    >
                      {course.type}
                    </Tag>
                  </div>

                  <p className="mb-6 text-pretty leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features */}
                  <ul className="mb-6 space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircleOutlined className="mt-0.5 h-4 w-4 shrink-0 !text-[#0bce80]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-2xl text-white ${
                      course.isPaid
                        ? "bg-[#0bce80] hover:bg-[#0bce80]/90"
                        : "bg-[#263c54] hover:bg-[#263c54]/90"
                    }`}
                  >
                    <YoutubeOutlined className="mr-2 h-4 w-4" />
                    Xem trên YouTube
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CallToActionZalo />

      {/* Latest Articles */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <h2 className="text-[#0bce80] text-2xl font-bold md:text-3xl">
              Bài viết mới nhất
            </h2>
            <Button
              className="group bg-transparent"
              onClick={() => navigate("/bai-viet")}
            >
              Xem tất cả
              <ArrowRightOutlined className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="group overflow-hidden border border-gray-200 bg-white transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={article.imageUrl || "/placeholder.svg"}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <CalendarOutlined className="h-3.5 w-3.5" />
                      {article.timestamp
                        ? new Date(article.timestamp).toLocaleDateString(
                            "vi-VN"
                          )
                        : "N/A"}
                    </span>
                    <Tag
                      color="green"
                      className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-600"
                    >
                      {article.category?.map((c) => c.name).join(", ")}
                    </Tag>
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 leading-tight">
                    {article.title}
                  </h3>

                  <div
                    className="prose lg:prose-xl line-clamp-1 overflow-hidden text-ellipsis my-3"
                    dangerouslySetInnerHTML={{ __html: article.description }}
                  />
                  <button
                    className="flex items-center bg-[#0bce80] text-white px-3 py-1 rounded-xl group/btn p-0 hover:opacity-90"
                    onClick={() => navigate(`/bai-viet/${article.slug}`)}
                  >
                    Đọc tiếp
                    <BsArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl mb-3">
              Sẵn sàng bắt đầu hành trình đầu tư?
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-muted-foreground leading-relaxed">
              Liên hệ ngay để nhận tư vấn miễn phí về chiến lược đầu tư phù hợp
              với bạn
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <Card className="bg-stone-50 !border-slate-200 shadow-lg p-8 lg:col-span-2">
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Họ và tên <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      className="!bg-[#0bce80]/10 !border-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-card-foreground"
                    >
                      Số điện thoại <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0912 345 678"
                      className="!bg-[#0bce80]/10 !border-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    className="!bg-[#0bce80]/10 !border-none"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-card-foreground"
                  >
                    Nội dung <span className="text-destructive">*</span>
                  </label>
                  <TextArea
                    id="message"
                    placeholder="Tôi muốn tìm hiểu về..."
                    rows={3}
                    className="resize-none !bg-[#0bce80]/10 !border-none"
                  />
                </div>

                <button className="w-full rounded-2xl py-2 bg-[#0bce80] text-accent-foreground hover:bg-[#0bce80]/90">
                  <SendOutlined className="mr-2 h-4 w-4" />
                  Gửi yêu cầu tư vấn
                </button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="!space-y-6">
              <Card className="bg-stone-50 !border-slate-200 shadow-lg p-6">
                <h3 className="mb-4 font-semibold text-card-foreground">
                  Thông tin liên hệ
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0bce80]/10 text-accent">
                      <PhoneOutlined className="!text-[#0bce80] h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-card-foreground">
                        Điện thoại
                      </div>
                      <div className="text-sm text-muted-foreground">
                        0912 345 678
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0bce80]/10 text-accent">
                      <MailOutlined className="!text-[#0bce80] h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-card-foreground">
                        Email
                      </div>
                      <div className="text-sm text-muted-foreground">
                        contact@dautu.vn
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0bce80]/10 text-accent">
                      <YoutubeOutlined className="!text-[#0bce80] h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-card-foreground">
                        YouTube
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Đầu Tư Cùng Anh Tuấn
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="!bg-[#263c54] !text-white !border-slate-200 shadow-lg p-6">
                <h3 className="mb-2 font-semibold">Tư vấn miễn phí</h3>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  Đăng ký ngay để nhận tư vấn chiến lược đầu tư phù hợp với bạn
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <VNIndexWidget />
    </main>
  );
}
