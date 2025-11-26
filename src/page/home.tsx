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
const courses = [
  {
    title: "Phân tích kỹ thuật cơ bản đến nâng cao",
    description:
      "Khóa học toàn diện về phân tích kỹ thuật, từ những kiến thức nền tảng đến các chiến lược giao dịch chuyên sâu.",
    type: "Có phí",
    isPaid: true,
    features: [
      "Tìm hiểu về cách đếm sóng, cách vẽ trendline xác định hỗ trợ và kháng cự, price action",
      "Các mẫu hình và cách cài đặt lệnh",
      "Giao dịch với MA và MACD,  phương pháp bắt đáy",
      "Hệ thống Ichimoku nâng cao, xác định điểm cân bằng và xu hướng tương lai",
      "Fibonaci và các đếm sóng Elliott",
      "Chỉ báo dòng tiền MFI, cách nhận diện cổ phiếu làm giá",
      "Ứng dụng các chỉ báo RSI, SAR, stochastic",
      "Tâm lý giao dịch, tâm lý đám đông và cách khắc phục.",
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
      "Kiến thức nhập môn chứng khoán",
      "Phân tích tài chính doanh nghiệp và phân tích kỹ thuật cơ bản",
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

  // useEffect(() => {
  //     duration: 1000,
  //     once: true, // animation chỉ chạy 1 lần
  //     mirror: false, // không mirror animation khi scroll up
  //     offset: 50, // offset (in px) from the original trigger point
  //   });
  // }, []); //

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        setLoading(true);
        const res = await adminAPI.getBlogsByCategory(
          "690ef209c89c48db2d4e4f58"
        );
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
              <h2
                className="text-[#0bce80] text-xl font-bold text-foreground md:text-3xl mb-3"
                data-aos="fade-down-right"
                data-aos-duration="2000"
                fa
              >
                Giới thiệu
              </h2>
              <p
                className="text-gray-600 text-xl md:text-2xl"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                Chúng tôi là Kỹ Sư Đầu Tư – đội ngũ kiến tạo nên lợi nhuận bền
                vững cho nhà đầu tư cá nhân bằng sức mạnh của Trí tuệ Nhân tạo
                (AI) và Phân tích Định lượng chuyên sâu.
              </p>
              <br />
              <p
                className="text-gray-600 text-xl md:text-2xl"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                Chúng tôi loại bỏ cảm xúc và sự mơ hồ khỏi giao dịch chứng khoán
                bằng một hệ thống 3 lớp công nghệ đột phá:
              </p>
              <br />
              <p
                className="text-gray-800 font-medium text-xl md:text-2xl"
                data-aos="fade-up-right"
                data-aos-duration="2000"
              >
                Công nghệ + Chiến lược + Hệ thống = Lợi nhuận bền vững
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                {/* <div className="flex">
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
                </div> */}
                <Link to="/gioi-thieu">
                  <button
                    className="mt-4 hover:bg-black bg-[#0bce80] border-none px-4 py-2 rounded-3xl hover:text-[#0bce80] text-lg font-medium text-white flex items-center gap-2"
                    data-aos="zoom-in-right"
                    data-aos-duration="2000"
                  >
                    Đọc thêm về tôi <ArrowRightOutlined />
                  </button>
                </Link>
                <div
                  className="flex justify-center items-center"
                  data-aos="zoom-out-right"
                  data-aos-duration="2500"
                >
                  <FaPhoneAlt size={32} color="#0bce80" />
                  <div className="ml-4">
                    <h2 className="font-medium text-base md:text-2xl mb-1.5">
                      Liên hệ tư vấn
                    </h2>
                    <p className="text-gray-600 text-lg">077 710 7264</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div
                className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-lg"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
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
          <h2
            className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            Hệ thống đầu tư
          </h2>
          <p
            className="text-gray-600 mb-12 text-2xl"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Phương pháp đầu tư đa dạng và hiệu quả được chứng minh qua thời gian
          </p>
          <Row gutter={[24, 24]}>
            {[
              {
                icon: <LineChartOutlined />,
                title: "ROBOT AI LỌC CỔ PHIẾU TỐI ƯU",
                desc: "Chúng tôi sử dụng AI để quét và phân tích hàng ngàn cổ phiếu mỗi ngày, xác định những ứng viên tiềm năng nhất.",
              },
              {
                icon: <BarChartOutlined />,
                title: "BOT AMIBROKER & HỆ THỐNG PHÂN VÙNG",
                desc: "Đầu tư không chỉ là mua, mà còn là quản trị rủi ro. BOT Amibroker của chúng tôi cung cấp một chiến lược giao dịch rõ ràng như đèn giao thông.",
              },
              {
                icon: <LineChartOutlined />,
                title: "BIỂU ĐỒ DÒNG TIỀN THÔNG MINH",
                desc: "Hiểu rõ thị trường đang thích ngành nào là chìa khóa. Công cụ độc quyền trên website của chúng tôi cho phép bạn biết điều đó.",
              },
              {
                icon: <TeamOutlined />,
                title: "Kinh nghiệm thực chiến",
                desc: "10+ năm kinh nghiệm đầu tư thực tế",
              },
            ].map((item, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <div data-aos="fade-right" data-aos-duration="1000">
                  <Card
                    hoverable
                    className="border-2 hover:border-yellow-400 transition-all h-64"
                  >
                    <div className="text-4xl text-[#0bce80] mb-4">
                      {item.icon}
                    </div>
                    <Title level={4}>{item.title}</Title>
                    <p>{item.desc}</p>
                  </Card>
                </div>
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
            <h2
              className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl mb-3"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Những thứ bạn cần để bắt đầu hành trình đầu tư
            </h2>
            <p
              className="mx-auto max-w-2xl text-pretty text-muted-foreground leading-relaxed text-2xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Đã được tổng hợp đầy đủ trong các khóa học dưới đây
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course, index) => (
              <div data-aos="zoom-in-up" data-aos-duration="1000">
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
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
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
              </div>
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
            <h2
              className="text-[#0bce80] text-2xl font-bold md:text-3xl"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Bài viết mới nhất
            </h2>
            <Button
              className="group bg-transparent"
              onClick={() => navigate("/bai-viet")}
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              Xem tất cả
              <ArrowRightOutlined className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <div data-aos="zoom-in-up" data-aos-duration="1000">
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
                  <div className="pt-6">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2
              className="text-[#0bce80] text-2xl font-bold text-foreground md:text-3xl mb-3"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Sẵn sàng bắt đầu hành trình đầu tư?
            </h2>
            <p
              className="mx-auto max-w-2xl text-pretty text-muted-foreground leading-relaxed"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              Liên hệ ngay để nhận tư vấn miễn phí về chiến lược đầu tư phù hợp
              với bạn
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <Card
              className="bg-stone-50 !border-slate-200 shadow-lg p-8 lg:col-span-2"
              data-aos="zoom-in-right"
              data-aos-duration="1000"
            >
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
              <Card
                className="bg-stone-50 !border-slate-200 shadow-lg p-6"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
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

              <Card
                className="!bg-[#263c54] !text-white !border-slate-200 shadow-lg p-6"
                data-aos="zoom-out-right"
                data-aos-duration="1000"
              >
                <h3 className="mb-2 font-semibold">Tư vấn miễn phí</h3>
                <p className="text-sm text-primary-foreground/90 leading-relaxed">
                  Đăng ký ngay để nhận tư vấn chiến lược đầu tư phù hợp với bạn
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:block hidden">
        <VNIndexWidget />
      </div>
    </main>
  );
}
