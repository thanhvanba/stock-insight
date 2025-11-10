import { useEffect, useState } from "react";
import { Row, Col, Card, Spin, Alert, List as AntList, Avatar } from "antd";
import NewsModal from "./modal";
import api from "../services/api";
// @ts-ignore
import PopularSymbols from "../../ticket";

const { Meta } = Card;

export default function List() {
  const [items, setItems] = useState(null);
  const [movers, setMovers] = useState(null);
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

        const moversRes = await api.getSymbolsMovers();
        if (!mounted) return;
        setMovers(moversRes);
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

  console.log(movers);

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
    <div className="container">
      <Row gutter={[16, 16]}>
        {/* Column 1: Featured News with large image */}
        <Col xs={24} md={12}>
          <Card title="Tin nổi bật" className="featured-news"
            data-aos="zoom-out-right"
            data-aos-duration="1000">
            {featured[0] && (
              <div className="featured-news-item">
                <div className="featured-image">
                  {(() => {
                    const src = resolveImageUrl(featured[0]) || featured[0].thumbnail || featured[0].image;
                    return src ? (
                      <img
                        src={src}
                        alt={featured[0].title}
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '100%',
                          height: '300px',
                          background: '#f0f2f5',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        No Image
                      </div>
                    );
                  })()}
                </div>
                <h3 style={{ margin: '16px 0 8px', fontSize: '20px' }}>
                  <a
                    role="button"
                    onClick={() => openModal(featured[0].postID)}
                    style={{
                      cursor: 'pointer',
                      color: 'inherit'
                    }}
                  >
                    {featured[0].title || featured[0].name || "Untitled"}
                  </a>
                </h3>
                <p style={{ color: '#666', marginBottom: '16px' }}>{featured[0].date}</p>
              </div>
            )}
            <AntList
              itemLayout="horizontal"
              dataSource={list.slice(1, 5)}
              renderItem={(item) => (
                <AntList.Item>
                  <AntList.Item.Meta
                    avatar={(() => {
                      const src = resolveImageUrl(item) || item.thumbnail || item.image;
                      return src ? (
                        <Avatar src={src} shape="square" size={80} />
                      ) : (
                        <Avatar shape="square" size={80}>N</Avatar>
                      );
                    })()}
                    title={
                      <a
                        role="button"
                        onClick={() => openModal(item.postID)}
                        style={{
                          cursor: 'pointer',
                          color: 'inherit'
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

        {/* Column 2: Regular News List */}
        <Col xs={24} md={8}>
          <Card title="Tin tức mới nhất"
            data-aos="zoom-out-up"
            data-aos-duration="1000">
            <AntList
              itemLayout="vertical"
              dataSource={list.slice(6, 12)}
              renderItem={(item) => (
                <AntList.Item
                  extra={(() => {
                    const src = resolveImageUrl(item) || item.thumbnail || item.image;
                    return src ? (
                      <img
                        width={120}
                        alt={item.title}
                        src={src}
                        style={{ borderRadius: '4px' }}
                      />
                    ) : null;
                  })()}
                >
                  <AntList.Item.Meta
                    title={
                      <a
                        role="button"
                        onClick={() => openModal(item.postID)}
                        style={{
                          cursor: 'pointer',
                          color: 'inherit'
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

        {/* Column 3: Market Movers */}
        <Col xs={24} md={4}>
          <Card
            title="TOP cổ phiếu biến động"
            bodyStyle={{ padding: '12px' }}
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          >
            {movers && movers.length > 0 ? (
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                {movers.map((it, index) => (
                  <li
                    key={index}
                    style={{
                      padding: '8px',
                      borderBottom: index < movers.length - 1 ? '1px solid #f0f0f0' : 'none',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: index < 3 ? '#ff4d4f' : '#f5f5f5',
                      color: index < 3 ? 'white' : '#666',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '8px',
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div style={{ textAlign: 'center', color: '#999' }}>
                Không có dữ liệu
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <NewsModal
        postId={selectedId}
        visible={modalVisible}
        onClose={closeModal}
      />
    </div>
  );
}
