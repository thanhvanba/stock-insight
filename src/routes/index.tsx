import { Route, Routes } from "react-router-dom";
import AboutPage from "../page/about";
import BlogPage from "../page/blog";
import CoursePage from "../page/course";
import HomePage from "../page/home";
import PageDetail from "../page/menu/PageDetail";
import NewsPage from "../page/news";
import PostDetail from "../page/menu/PostDetail";
// import other pages as needed

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bai-viet" element={<BlogPage />} />
      <Route path="/gioi-thieu" element={<AboutPage />} />
      <Route path="/tin-tuc" element={<NewsPage />} />
      <Route path="/khoa-hoc" element={<CoursePage />} />
      <Route path="/posts/:slug" element={<PostDetail />} />
      <Route path="/pages/:slug" element={<PageDetail />} />
    </Routes>
  );
}
