import { Route, Routes } from "react-router-dom";
import AboutPage from "../page/about";
import Bio from "../page/bio";
import BlogPage from "../page/blog";
import BlogDetail from "../page/blog/BlogDetail";
import CoursePage from "../page/course";
import HomePage from "../page/home";
import NewsPage from "../page/news";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/bai-viet" element={<BlogPage />} />
      <Route path="/bai-viet/:slug" element={<BlogDetail />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/khoa-hoc" element={<CoursePage />} />
      <Route path="/lien-he" element={<Bio />} />

      {/* <Route path="/posts/:slug" element={<Navigate to=".." replace />} />
      <Route path="/pages/:slug" element={<Navigate to=".." replace />} />

      <Route path="/:slug" element={<DynamicContent />} /> */}
      {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
    </Routes>
  );
}
