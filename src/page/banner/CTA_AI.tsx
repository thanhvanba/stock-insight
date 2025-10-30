//@ts-nocheck
import Title from "antd/es/typography/Title";
import Banner from "./Banner";
import TextBox from "./TextBox";
import { Button, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export const CallToActionAI = () => (
  <Banner height="280px" backgroundImage="https://picsum.photos/800/280">
    <TextBox align="center" maxWidth="100%">
      <Title
        style={{ color: "#fff", fontSize: "2.2rem", marginBottom: "16px" }}
        level={2}
      >
        Chỉ có 5% nhà đầu tư thành công nhờ "HỆ THỐNG"
      </Title>
      <Paragraph
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "18px",
          maxWidth: "600px",
        }}
      >
        Phân tích dữ liệu bằng AI | Phân tích kỹ thuật tự động | Xác định dòng tiền của thị trường | Kinh nghiệm quản lý rủi ro
      </Paragraph>
      <Space size="middle">
        <Button type="primary" size="large">
          HỆ THỐNG KIẾN THỨC
        </Button>
        <Button type="default" size="large">
          HỆ THỐNG AI ĐẦU TƯ
        </Button>
      </Space>
      {/* <a
        href="https://zalo.me/g/vvvtqz849"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Button
          type="primary"
          size="large"
          style={{
            marginTop: "24px",
            backgroundColor: "#fff",
            color: "#1890ff",
          }}
        >
          HỖ TRỢ ĐẶT LỆNH MIỄN PHÍ
        </Button>
      </a> */}
    </TextBox>
  </Banner>
);
