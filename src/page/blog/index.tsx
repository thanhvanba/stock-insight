import { useEffect, useState } from "react";
import {
  Input,
  Card,
  Row,
  Col,
  Tag,
  Typography,
  Pagination,
  Image,
  Spin,
  message,
} from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { adminAPI } from "../../service";

const { Title, Paragraph, Text } = Typography;

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  console.log("🚀 ~ BlogPage ~ blogs:", blogs);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["Tất cả"]);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Lấy danh sách blog từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Lấy danh sách bài viết
        const blogRes = await adminAPI.getBlogs();
        const blogs = blogRes.data;
        setBlogs(blogs);
        setFilteredBlogs(blogs);

        // Lấy danh mục từ API riêng
        const categoryRes = await adminAPI.getCategory();
        const categories = categoryRes || [];

        // Thêm tùy chọn “Tất cả”
        setCategories(["Tất cả", ...categories.map((c: any) => c.name)]);
      } catch (err) {
        console.error("Error fetching blogs or categories:", err);
        message.error("Không thể tải dữ liệu bài viết hoặc danh mục.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 🔹 Lọc theo danh mục và tìm kiếm
  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "Tất cả") {
      filtered = filtered.filter((b) => b.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [selectedCategory, searchTerm, blogs]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spin size="large" tip="Đang tải bài viết..." />
      </div>
    );
  }

  console.log(filteredBlogs);
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          background: "#263c54",
          color: "#fff",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <Title style={{ color: "#fff", marginBottom: 16 }}>Bài viết</Title>
        <Paragraph style={{ color: "#e6f7ff", fontSize: 16 }}>
          Kiến thức và phân tích chuyên sâu về thị trường chứng khoán
        </Paragraph>
      </section>

      {/* Search & Filter Section */}
      <section
        style={{
          background: "#f5f5f5",
          padding: "2rem 1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[16, 16]} align="middle" justify="space-between">
            <Col xs={24} md={8}>
              <Input
                placeholder="Tìm kiếm bài viết..."
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={24} md={16}>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const isActive = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1.5 text-sm rounded-md border transition-all duration-200
                        ${
                          isActive
                            ? "bg-green-500 text-white border-green-600 hover:bg-green-700"
                            : "bg-white text-green-700 border-green-300 hover:bg-green-100"
                        }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Blog Cards */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[24, 24]}>
            {filteredBlogs.map((blog) => (
              <Col xs={24} md={12} lg={8} key={blog.id}>
                <Card
                  hoverable
                  cover={
                    <Image
                      src={blog.imageUrl || "/placeholder.jpg"}
                      alt={blog.title}
                      className="max-h-48"
                      style={{
                        objectFit: "cover",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        width: "100%",
                        display: "block",
                      }}
                    />
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 8,
                    }}
                  >
                    <Tag color="green">
                      {blog.category.map((c: any) => c.name)}
                    </Tag>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                      {new Date(blog.timestamp).toLocaleString()}
                    </Text>
                  </div>
                  <Title level={5}>{blog.title}</Title>
                  <div
                    className="prose lg:prose-xl line-clamp-3 overflow-hidden text-ellipsis my-3"
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  />

                  <Link to={`/bai-viet/${blog.slug}`}>
                    <button className="inline-flex items-center gap-1 text-green-600 font-medium hover:text-green-700 transition-colors cursor-pointer">
                      Đọc tiếp
                      <ArrowRightOutlined className="w-4 h-4" />
                    </button>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Pagination (chưa có API phân trang thật) */}
          <div className="text-center mt-12">
            <Pagination
              current={1}
              total={filteredBlogs.length}
              pageSize={6}
              showSizeChanger={false}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
