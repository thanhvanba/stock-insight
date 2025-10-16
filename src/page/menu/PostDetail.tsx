// PostDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify"; // khuyên dùng để render HTML an toàn
import { API_BASE, getJson } from "./api";

export default function PostDetail() {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<Error | null>(null);

  console.log(slug)

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        // BE: GET /api/posts/:slug  (đặt đúng prefix của bạn, ví dụ /posts/:slug)
        const json = await getJson(`${API_BASE}/blogs/slug/${slug}`);
        if (alive) setData(json);
      } catch (e: any) {
        if (alive) setErr(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, [slug]);

  if (loading) return <p>Đang tải bài viết…</p>;
  if (err) return <p>Lỗi: {err.message}</p>;
  if (!data) return <p>Không tìm thấy bài viết.</p>;

  // Chuẩn hoá các field tuỳ BE của bạn (ví dụ: title, contentHtml hoặc content)
  const title = data.title || data.name || data.label || data.slug;
  const html = data.contentHtml || data.content || "";

  return (
    <article className="container">
      <h1>{title}</h1>
      {data.thumbnail && <img src={data.thumbnail} alt={title} />}
      <div
        className="post-body"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
      />
    </article>
  );
}
