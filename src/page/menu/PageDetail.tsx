// PageDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { API_BASE, getJson } from "./api";

export default function PageDetail() {
  const { slug } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<Error | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        // BE: GET /api/pages/:slug
        const json = await getJson(`${API_BASE}/pages/${slug}`);
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

  if (loading) return <p>Đang tải trang…</p>;
  if (err) return <p>Lỗi: {err.message}</p>;
  if (!data) return <p>Không tìm thấy trang.</p>;

  const title = data.title || data.name || data.label || data.slug;
  const html = data.contentHtml || data.content || "";

  return (
    <main className="container">
      <h1>{title}</h1>
      <div
        className="page-body"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
      />
    </main>
  );
}
