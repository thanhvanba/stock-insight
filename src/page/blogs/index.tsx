import { useEffect, useState } from "react";
import {
  Input,
  Card,
  Row,
  Col,
  Tag,
  Typography,
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
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Lấy danh sách blog từ API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Lấy danh sách bài viết
        const blogRes = await adminAPI.getAllBlogs();
        const blogs = blogRes.data || [];
        setBlogs(blogs.reverse());
      } catch (err) {
        console.error("Error fetching blogs or categories:", err);
        message.error("Không thể tải dữ liệu bài viết hoặc danh mục.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <Spin size="large" tip="Đang tải bài viết..." />
      </div>
    );
  }

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
        <Title
          style={{ color: "#fff", marginBottom: 16 }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Bài viết
        </Title>
        <Paragraph
          style={{ color: "#e6f7ff", fontSize: 16 }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
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
            <Col xs={24} md={24}>
              <Input
                placeholder="Tìm kiếm bài viết..."
                prefix={<SearchOutlined />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </section>

      {/* Blog Cards */}
      <section style={{ padding: "4rem 1rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Row gutter={[24, 24]} data-aos="zoom-in-up" data-aos-duration="1000">
            {blogs.map((blog) => (
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
          {/* <div className="text-center mt-12">
            <Pagination
              current={1}
              total={blogs.length}
              pageSize={6}
              showSizeChanger={false}
            />
          </div> */}
        </div>
      </section>
    </main>
  );
}
