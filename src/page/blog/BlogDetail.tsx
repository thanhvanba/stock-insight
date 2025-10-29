import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { adminAPI } from "../../service";
import type { BlogResponse } from "../../types/blog";
import { Typography } from "antd";

const BlogDetail: React.FC = () => {
  const { Title, Paragraph } = Typography;
  //const { id } = useParams<{ id: string }>();
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  console.log(slug)

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      try {
        // setLoading(true);
        // const data = await adminAPI.getBlogById(id);
        // setBlog(data);
        // setError(null);

        setLoading(true);
        const data = await adminAPI.getBlogBySlug(slug);
        setBlog(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch blog post.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!blog) {
    return <div>Blog post not found.</div>;
  }

  return (
    <>
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
      {/* <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold my-4">{blog.title}</h1>
          <p className="text-gray-500 mb-4">
            Ngày đăng: {new Date(blog.timestamp).toLocaleString()}
          </p>
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-lg mb-8"
            />
          )}
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </article>
      </div> */}
      <div className="container mx-auto px-4 py-8 ">
        {/* Thêm my-12 để tạo khoảng trống trên và dưới */}
        <article className="max-w-4xl mx-auto my-16">
          <h1 className="text-4xl font-bold my-4">{blog.title}</h1>
          <p className="text-gray-500 mb-4">
            Ngày đăng: {new Date(blog.timestamp).toLocaleString()}
          </p>
          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-lg mb-8"
            />
          )}
          <div
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: blog.description }}
          />
        </article>
      </div>
    </>
  );
};

export default BlogDetail;
