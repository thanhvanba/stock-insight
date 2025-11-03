import { useEffect, useState } from "react";
import { Modal, Spin, Alert, Button } from "antd";
import api from "../services/api";

export default function NewsModal({ postId, visible, onClose }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("[NewsModal] effect visible=", visible, "postId=", postId);
    if (!visible || !postId) return;
    let mounted = true;
    const load = async () => {
      console.log("[NewsModal] fetch start for postId=", postId);
      setLoading(true);
      setError(null);
      try {
        const json = await api.getDetails(postId);
        if (!mounted) return;
        console.log("[NewsModal] fetch ok for postId=", postId);
        setData(json);
      } catch (err) {
        console.error("[NewsModal] fetch error for postId=", postId, err);
        if (!mounted) return;
        setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, [postId, visible]);

  return (
    <Modal
      visible={visible}
      title={data ? data.title || "Chi tiết tin" : "Chi tiết tin"}
      onCancel={onClose}
      width={650}
      bodyStyle={{ maxHeight: "80vh", overflowY: "auto" }}
      footer={[
        // <Button key="back">Return</Button>,
        // <Button key="submit" type="primary" loading={loading}>
        //   Submit
        // </Button>,
        <Button
          key="link"
          href={`https://www.google.com/search?q=${encodeURIComponent(
            data ? data.title || "" : ""
          )}`}
          target="_blank"
          type="primary"
          loading={loading}
        >
          Kiểm tra tin tức trên Google
        </Button>,
      ]}
      destroyOnClose
    >
      {loading && <Spin />}
      {error && (
        <Alert
          type="error"
          message="Lỗi khi tải chi tiết"
          description={String(error)}
        />
      )}

      {!loading && !error && data && (
        <div
          dangerouslySetInnerHTML={{ __html: data.content || data.html || "" }}
        />
      )}
    </Modal>
  );
}
