import { Routes, Route } from "react-router-dom";
import HomePage from "../page/home";
import BlogPage from "../page/blog";
import AboutPage from "../page/about";
import NewsPage from "../page/news";
import CoursePage from "../page/course";
// import other pages as needed

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bai-viet" element={<BlogPage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/khoa-hoc" element={<CoursePage />} />
      {/* Thêm các route khác nếu cần */}
    </Routes>
  );
}
