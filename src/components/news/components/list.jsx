import { useEffect, useState } from "react";
import { Row, Col, Card, Spin, Alert, List as AntList, Avatar } from "antd";
import NewsModal from "./modal";
import api from "../services/api";
// @ts-ignore
import PopularSymbols from "../../ticket";

const { Meta } = Card;

export default function List() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await api.getAll();
        if (!mounted) return;
        setItems(res);
      } catch (err) {
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
  }, []);

  if (loading) return <Spin tip="Đang tải tin..." />;
  if (error)
    return (
      <Alert
        message="Lỗi khi tải tin"
        description={
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(error, null, 2)}
          </pre>
        }
        type="error"
        showIcon
      />
    );

  if (!items || (Array.isArray(items) && items.length === 0))
    return <div>Chưa có tin nào</div>;

  const list = Array.isArray(items) ? items : items.items || [];

  const resolveImageUrl = (item) => {
    // item.images may be array of ids or array of objects
    const imgs = item.images;
    if (!imgs) return null;
    let imageID = null;
    if (Array.isArray(imgs) && imgs.length > 0) {
      const first = imgs[0];
      if (typeof first === "string") imageID = first;
      else if (first && (first.imageID || first.id))
        imageID = first.imageID || first.id;
    } else if (typeof imgs === "string") {
      imageID = imgs;
    }

    return imageID ? `https://static.fireant.vn/posts/image/${imageID}` : null;
  };

  // Prepare slices for columns 2 and 3
  const featured = list.slice(0, 5);
  const trending = list.slice(5, 10);

  const openModal = (id) => {
    console.log("[News] openModal postId=", id);
    setSelectedId(id);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedId(null);
  };

  return (
    <Row gutter={[16, 16]}>
      {/* Column 1: News list with avatar left and title right */}
      <Col xs={24} sm={24} md={6}>
        <Card title="Tin tức">
          <AntList
            itemLayout="horizontal"
            dataSource={list}
            renderItem={(item) => (
              <AntList.Item>
                <AntList.Item.Meta
                  avatar={(() => {
                    const src =
                      resolveImageUrl(item) || item.thumbnail || item.image;
                    return src ? (
                      <Avatar src={src} shape="square" size={120} />
                    ) : (
                      <Avatar shape="square" size={120}>
                        N
                      </Avatar>
                    );
                  })()}
                  title={
                    <a
                      role="button"
                      onClick={() => openModal(item.postID)}
                      style={{
                        cursor: "pointer",
                        color: "inherit",
                        textDecoration: "underline",
                      }}
                    >
                      {item.title || item.name || "Untitled"}
                    </a>
                  }
                  description={item.date}
                />
              </AntList.Item>
            )}
          />
        </Card>
      </Col>

      {/* Column 2: Popular Symbols */}
      <Col xs={24} sm={24} md={6}>
        <PopularSymbols />
      </Col>

      <NewsModal
        postId={selectedId}
        visible={modalVisible}
        onClose={closeModal}
      />

      {/* Column 3: Featured */}
      <Col xs={24} sm={24} md={6}>
        <Card title="Tin nổi bật">
          <ul style={{ paddingLeft: 16 }}>
            {featured.map((it) => (
              <li
                key={it.id || it.postId || Math.random()}
                style={{ marginBottom: 8 }}
              >
                <a href={`#/news/${it.id || it.postId}`}>
                  {it.title || it.name}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </Col>

      {/* Column 4: Trending / Most viewed */}
      <Col xs={24} sm={24} md={6}>
        <Card title="Xem nhiều">
          <ul style={{ paddingLeft: 16 }}>
            {trending.map((it) => (
              <li
                key={it.id || it.postId || Math.random()}
                style={{ marginBottom: 8 }}
              >
                <a href={`#/news/${it.id || it.postId}`}>
                  {it.title || it.name}
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </Col>
    </Row>
  );
}
