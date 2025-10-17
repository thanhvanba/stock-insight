import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostDetail from "../page/menu/PostDetail";
import PageDetail from "../page/menu/PageDetail";

type ContentType = "post" | "page";
interface ResolveResult {
  type: ContentType;
  data: any;
}

const API_BASE = "http://localhost:3000";

async function fetchPostBySlug(slug: string) {
  const res = await fetch(`${API_BASE}/blogs/${slug}`);
  if (!res.ok) throw res;
  return res.json();
}

async function fetchPageBySlug(slug: string) {
  const res = await fetch(`${API_BASE}/pages/${slug}`);
  if (!res.ok) throw res;
  return res.json();
}

export default function DynamicContent() {
  const { slug = "" } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const initialType = useMemo(() => {
    const state = location.state as { contentType?: ContentType } | null;
    return state?.contentType ?? null;
  }, [location.state]);

  const [result, setResult] = useState<ResolveResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setResult(null);

    const resolveContent = async () => {
      try {
        if (initialType === "post") {
          const data = await fetchPostBySlug(slug);
          if (!cancelled) {
            setResult({ type: "post", data });
            setLoading(false);
          }
          return;
        }
        if (initialType === "page") {
          const data = await fetchPageBySlug(slug);
          if (!cancelled) {
            setResult({ type: "page", data });
            setLoading(false);
          }
          return;
        }

        try {
          const data = await fetchPostBySlug(slug);
          if (!cancelled) {
            setResult({ type: "post", data });
            setLoading(false);
          }
        } catch (err: any) {
          if (err?.status !== 404 && err?.status !== 400) throw err;
          try {
            const page = await fetchPageBySlug(slug);
            if (!cancelled) {
              setResult({ type: "page", data: page });
              setLoading(false);
            }
          } catch (pageErr: any) {
            if (!cancelled) {
              setResult(null);
              setLoading(false);
            }
          }
        }
      } catch (fatal) {
        if (!cancelled) {
          setResult(null);
          setLoading(false);
        }
      }
    };

    resolveContent();
    return () => {
      cancelled = true;
    };
  }, [slug, initialType]);

  if (loading) return <div>Loading...</div>;
  if (!result) {
    navigate("/404", { replace: true });
    return null;
  }

  return result.type === "post" ? (
    <PostDetail data={result.data} />
  ) : (
    <PageDetail data={result.data} />
  );
}

