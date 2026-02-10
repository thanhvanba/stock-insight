//@ts-nocheck
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/src/assets/images/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { href: "/", label: "Trang chủ" },
    { href: "/gioi-thieu", label: "Giới thiệu" },
    { href: "/bai-viet", label: "Bài viết" },
    { href: "/tin-tuc", label: "Tin tức" },
    { href: "/khoa-hoc", label: "Khoá học" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md text-gray-900"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container h-16 flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-16 w-16" />
          {/* <Link to="/" className="flex items-center gap-2">
            <h2 className="text-2xl font-semibold text-[#0bce80]">
              <center>
                <span>LÊ TUẤN</span>
                <br />
                KỸ SƯ ĐẦU TƯ
              </center>
            </h2>
          </Link> */}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#0bce80] border-b-2 border-[#0bce80]"
                      : isScrolled
                        ? "text-gray-800 hover:text-[#0bce80]"
                        : "text-white hover:text-[#0bce80]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link to="/lien-he">
              <button className="bg-[#0bce80] text-white rounded-full px-5 py-2 font-medium text-sm transition-all duration-200 hover:bg-white hover:text-[#0bce80] border border-transparent hover:border-[#0bce80]">
                Liên hệ tư vấn
              </button>
            </Link>

            <button
              onClick={openModal}
              className="bg-[#0bce80] text-white rounded-full px-5 py-2 font-medium text-sm transition-all duration-200 hover:bg-white hover:text-[#0bce80] border border-transparent hover:border-[#0bce80]"
            >
              Trở thành CTV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              type="text"
              icon={
                <MenuOutlined
                  className={isScrolled ? "text-black" : "text-white"}
                />
              }
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          closeIcon={<CloseOutlined />}
        >
          <Menu mode="vertical" selectable={false}>
            {navItems.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));
              return (
                <Menu.Item key={item.href}>
                  <Link
                    to={item.href}
                    className={isActive ? "text-[#0bce80] font-semibold" : ""}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </Menu.Item>
              );
            })}

            <Menu.Item>
              <Link to="/lien-he" onClick={() => setMobileMenuOpen(false)}>
                <Button type="primary" block>
                  Yêu cầu tư vấn
                </Button>
              </Link>
            </Menu.Item>
          </Menu>
        </Drawer>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4">
          <div
            className="relative bg-white rounded-lg shadow-2xl max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl"
            >
              ✕
            </button>

            {/* Image content */}
            <div>
              <img
                src="/ctv.jpg" // Thay bằng đường dẫn ảnh của bạn
                alt="Khóa học YouTube"
                className="w-full max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            {/* Optional description */}
            <div className="p-4 border-t">
              <div className="flex justify-center mt-3">
                <a
                  href="https://zalo.me/0777107264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                >
                  Trở thành một phần của đội ngũ Kỹ Sư Đầu Tư
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
