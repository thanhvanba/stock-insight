// pageTemplates.tsx
import AboutPage from "../page/about";
import BlogPage from "../page/blog";
import CoursePage from "../page/course";
import HomePage from "../page/home";
import PageDetail from "../page/menu/PageDetail";
import NewsPage from "../page/news";
// có thể thêm các trang đặc biệt khác: ContactPage, CourseLanding, ...

export function resolvePageComponentBySlug(slug?: string) {
  switch ((slug || "").toLowerCase()) {
    case "trang-chu":
      return HomePage;
    case "gioi-thieu":
      return AboutPage;
    case "bai-viet":
      return BlogPage;
    case "tin-tuc":
      return NewsPage;
    case "khoa-hoc":
      return CoursePage;

    default:
      return PageDetail; // mặc định dùng layout trang thường
  }
}
