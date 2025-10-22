import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../page/home";
import DynamicContent from "./DynamicContent";
import AboutPage from "../page/about";
import BlogPage from "../page/blog";
import NewsPage from "../page/news";
import CoursePage from "../page/course";
import BlogDetail from "../page/blog/BlogDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/bai-viet" element={<BlogPage />} />
      <Route path="/bai-viet/:id" element={<BlogDetail />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/khoa-hoc" element={<CoursePage />} />

      <Route path="/posts/:slug" element={<Navigate to=".." replace />} />
      <Route path="/pages/:slug" element={<Navigate to=".." replace />} />

      <Route path="/:slug" element={<DynamicContent />} />
      {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
    </Routes>
  );
}
