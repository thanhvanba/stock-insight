// src/components/Banner/TextBox.jsx

const TextBox = ({
  children,
  align = "center", // 'left' | 'center' | 'right'
  maxWidth = "800px",
  padding = "0 20px",
}) => {
  const textAlign =
    align === "center" ? "center" : align === "left" ? "left" : "right";

  const alignItems =
    align === "center"
      ? "center"
      : align === "left"
      ? "flex-start"
      : "flex-end";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems,
        textAlign,
        height: "100%",
        maxWidth,
        margin: "0 auto",
        padding,
        position: "relative",
        zIndex: 2, // đảm bảo trên overlay
      }}
    >
      {children}
    </div>
  );
};

export default TextBox;
