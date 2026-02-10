import { Row, Col, Typography, Divider } from "antd";
import { FaYoutube, FaEnvelope, FaPhone, FaTiktok, FaCalculator, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const { Title, Text } = Typography;

export default function Footer() {
  return (
    <footer className="py-16 px-4 bg-[#172f3a] text-white">
      <div className="container">
        <Row gutter={[32, 32]}>
          {/* About */}
          <Col xs={24} sm={12} md={6} data-aos="fade-right" data-aos-duration="1000">
            <h3 className="text-2xl font-bold mb-4">KỸ SƯ ĐẦU TƯ</h3>
            <p className="text-sm mb-6 opacity-90 leading-relaxed">
              Hệ thống đầu tư chứng khoán kết hợp AI và kinh nghiệm thực chiến.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.youtube.com/@letuanstock84"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                href="https://zalo.me/0777107264"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="Zalo"
              >
                <FaCalculator className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/tuanper"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@kysuchungkhoan84"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="Tiktok"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-duration="1000">
            <Title level={4} className="!text-white !mb-4">
              Liên kết
            </Title>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/gioi-thieu", label: "Giới thiệu" },
                { href: "/bai-viet", label: "Kiến thức" },
                { href: "/tin-tuc", label: "Tin tức" },
                { href: "/khoa-hoc", label: "Khoá học" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="!text-white/60 hover:!text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-duration="1000">
             <Title level={4} className="!text-white !mb-4">
               Liên kết
             </Title>
             <ul className="space-y-2 text-sm">
               {[
                 { href: "/gioi-thieu", label: "Giới thiệu" },
                 { href: "/bai-viet", label: "Bài viết" },
                 { href: "/diem-tin", label: "Điểm tin" },
                 { href: "/khoa-hoc", label: "Khoá học" },
               ].map((item) => (
                 <li key={item.href}>
                   <a
                     href={item.href}
                     className="!text-white/60 hover:!text-white transition"
                   >
                     {item.label}
                   </a>
                 </li>
               ))}
             </ul>
           </Col> */}

          {/* Courses */}
          <Col xs={24} sm={12} md={6} data-aos="fade-up" data-aos-duration="1000">
            <Title level={4} className="!text-white !mb-4">
              Khoá học
            </Title>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/khoa-hoc#paid", label: "Phân tích kỹ thuật" },
                { href: "/khoa-hoc#free", label: "Kiến thức miễn phí" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="!text-white/60 hover:!text-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact */}
          <Col xs={24} sm={12} md={6} data-aos="fade-right" data-aos-duration="1000">
            <Title level={4} className="!text-white !mb-4">
              Liên hệ
            </Title>
            <div className="text-sm space-y-3">
              <div className="flex items-center gap-2">
                <FaLocationDot className="h-4 w-4 !text-[#0bce80]" />
                <span>Hồ Chí Minh, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="h-4 w-4 !text-[#0bce80]" />
                <span>tuan.hvac2014@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="h-4 w-4 !text-[#0bce80]" />
                <span>077 710 7264</span>
              </div>
            </div>
          </Col>
        </Row>

        <Divider className="!border-white/20 !mt-12" />
        <Text
          className="block text-center text-xs !text-white/70 mb-4"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          Tất cả thông tin trong videos và bài viết đều không phải là lời khuyên
          đầu tư.
          <br />
          Hoạt động đầu tư luôn tiềm ẩn nhiều rủi ro tài chính. <br />
          Kênh chỉ mang lại kiến thức và góc nhìn cho các bạn khi tham gia đầu
          tư, còn sự quyết định nằm ở chính các bạn.
          <br />
          &copy; 2025 Đầu Tư Cùng Anh Tuấn. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
