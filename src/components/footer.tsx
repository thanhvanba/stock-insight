import { Row, Col, Typography, Divider } from "antd";
import { FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const { Title, Text } = Typography;

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#172f3a] text-white">
      <div className="max-w-6xl mx-auto">
        <Row gutter={[32, 32]}>
          {/* About */}
          <Col xs={24} md={6}>
            <h3 className="text-2xl font-bold mb-4">KỸ SƯ ĐẦU TƯ</h3>
            <p className="text-sm mb-6 opacity-90 leading-relaxed">
              Hệ thống đầu tư chứng khoán kết hợp AI và kinh nghiệm thực chiến.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="YouTube"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg !text-white !bg-[#0bce80] transition hover:bg-stone-500/30"
                aria-label="Phone"
              >
                <FaPhone className="h-5 w-5" />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col xs={24} md={6}>
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
          </Col>

          {/* Courses */}
          <Col xs={24} md={6}>
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
          <Col xs={24} md={6}>
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
                <span>contact@dautu.vn</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="h-4 w-4 !text-[#0bce80]" />
                <span>0123 456 789</span>
              </div>
            </div>
          </Col>
        </Row>

        <Divider className="!border-white/20 !mt-12" />
        <Text className="block text-center text-xs !text-white/70">
          &copy; 2025 Đầu Tư Cùng Anh Tuấn. All rights reserved.
        </Text>
      </div>
    </footer>
  );
}
