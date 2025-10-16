import React, { useEffect, useMemo, useState } from "react";
import { Menu } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const API_BASE = "http://localhost:3000";

type RewriteResult = {
  pathname: string;
  state?: Record<string, unknown>;
  isExternal: boolean;
};

function normalisePath(path?: string | null): string {
  if (!path) return "";
  try {
    const url = new URL(path);
    return url.pathname || "";
  } catch {
    return path.startsWith("/") ? path : `/${path}`;
  }
}

function rewriteLegacyPath(path?: string | null, type?: string): RewriteResult {
  if (!path) return { pathname: "#", isExternal: false };

  if (/^https?:\/\//i.test(path)) {
    return { pathname: path, isExternal: true };
  }

  const normalised = normalisePath(path);
  const lowerType = (type || "").toLowerCase();

  const postMatch = normalised.match(/^\/posts\/([^/?#]+)/i);
  if (postMatch || lowerType === "post") {
    const slug = decodeURIComponent(
      postMatch ? postMatch[1] : normalised.replace(/^\//, "")
    );
    return {
      pathname: `/${slug}`,
      state: { contentType: "post", slug },
      isExternal: false,
    };
  }

  const pageMatch = normalised.match(/^\/pages\/([^/?#]+)/i);
  if (pageMatch || lowerType === "page") {
    const slug = decodeURIComponent(
      pageMatch ? pageMatch[1] : normalised.replace(/^\//, "")
    );
    return {
      pathname: `/${slug}`,
      state: { contentType: "page", slug },
      isExternal: false,
    };
  }

  return {
    pathname: normalised,
    isExternal: false,
  };
}

export default function Header() {
  const [menus, setMenus] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    const fetchMenus = async () => {
      try {
        const res = await fetch(`${API_BASE}/menus`, {
          headers: { Accept: "application/json" },
        });
        const contentType = res.headers.get("content-type") || "";
        if (!contentType.includes("application/json")) {
          const snippet = await res.text();
          throw new Error(
            `Expected JSON, got ${contentType}. Body starts with: ${snippet.slice(
              0,
              80
            )}`
          );
        }
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!cancelled) {
          setMenus(Array.isArray(data) ? data : data.items ?? []);
        }
      } catch (err: any) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchMenus();
    return () => {
      cancelled = true;
    };
  }, []);

  const items = useMemo(() => {
    const roots = menus
      .filter((item) => item.parentId == null)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

    return roots.map((menu) => {
      const link = rewriteLegacyPath(menu.slug ?? menu.url, menu.type);

      if (link.isExternal) {
        return {
          key: menu._id,
          label: (
            <a href={link.pathname} target="_blank" rel="noopener noreferrer">
              {menu.label}
            </a>
          ),
        };
      }

      return {
        key: menu._id,
        label: (
          <NavLink
            to={link.pathname}
            state={link.state}
            end
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {menu.label}
          </NavLink>
        ),
      };
    });
  }, [menus]);

  const selectedKey = useMemo(() => {
    const active = menus.find((menu) => {
      const link = rewriteLegacyPath(menu.slug ?? menu.url, menu.type);
      return (
        !link.isExternal &&
        link.pathname !== "#" &&
        location.pathname === link.pathname
      );
    });
    return active?._id;
  }, [location.pathname, menus]);

  if (loading) return <p>Loading menus...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Menu
      mode="horizontal"
      selectedKeys={selectedKey ? [selectedKey] : []}
      items={items}
    />
  );
}
