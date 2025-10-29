// src/components/Banner/Banner.jsx

const Banner = ({
  height = "500px",
  backgroundColor = "#000",
  backgroundImage = null,
  video = null, // { src: string, autoPlay?: boolean, muted?: boolean, loop?: boolean }
  overlay = { enabled: false, color: "rgba(0,0,0,0.5)" },
  border = {
    width: { top: 0, right: 0, bottom: 0, left: 0 },
    style: "solid",
    color: "#000",
    radius: "0px",
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  },
  link = null, // { url: string, target?: '_self'|'_blank', rel?: string }
  sticky = false,
  children,
  className = "",
}) => {
  // === 1. Style cho container chính ===
  const containerStyle = {
    position: sticky ? "sticky" : "relative",
    top: sticky ? 0 : undefined,
    height,
    margin: `${border.margin.top}px ${border.margin.right}px ${border.margin.bottom}px ${border.margin.left}px`,
    borderStyle: border.style,
    borderColor: border.color,
    borderTopWidth: `${border.width.top}px`,
    borderBottomWidth: `${border.width.bottom}px`,
    borderLeftWidth: `${border.width.left}px`,
    borderRightWidth: `${border.width.right}px`,
    borderRadius: border.radius,
    overflow: "hidden", // quan trọng: để video/ảnh không tràn
    boxSizing: "border-box",
  };

  // === 2. Background style ===
  const backgroundStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
  };

  // === 3. Overlay ===
  const renderOverlay = () => {
    if (!overlay.enabled) return null;
    return (
      <div
        style={{
          ...backgroundStyle,
          backgroundColor: overlay.color,
          zIndex: 1,
        }}
      />
    );
  };

  // === 4. Nội dung chính (children) ===
  const content = (
    <div style={{ position: "relative", height: "100%", zIndex: 2 }}>
      {children}
    </div>
  );

  // === 5. Bao link nếu có ===
  const maybeLinkedContent = link?.url ? (
    <a
      href={link.url}
      target={link.target || "_self"}
      rel={
        link.rel ||
        (link.target === "_blank" ? "noopener noreferrer" : undefined)
      }
      style={{
        display: "block",
        height: "100%",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {content}
    </a>
  ) : (
    content
  );

  return (
    <section className={`banner ${className}`} style={containerStyle}>
      {/* Background: Ưu tiên video > ảnh > màu */}
      {video?.src ? (
        <video
          src={video.src}
          autoPlay={video.autoPlay !== false}
          muted={video.muted !== false}
          loop={video.loop !== false}
          playsInline
          style={{ ...backgroundStyle, objectFit: "cover" }}
        />
      ) : backgroundImage ? (
        <div
          style={{
            ...backgroundStyle,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : backgroundColor ? (
        <div style={{ ...backgroundStyle, backgroundColor }} />
      ) : null}

      {renderOverlay()}
      {maybeLinkedContent}
    </section>
  );
};

export default Banner;
