//@ts-nocheck
import Title from "antd/es/typography/Title";
import Banner from "./Banner";
import TextBox from "./TextBox";
import { Button, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export const CallToActionZalo = () => (
  <Banner height="280px" backgroundImage="https://picsum.photos/800/280">
    <TextBox align="center" maxWidth="100%">
      <Title
        style={{ color: "#fff", fontSize: "2.2rem", marginBottom: "16px" }}
        level={2}
      >
        Thời đại AI - Mà không dùng AI để đầu tư là một sai lầm?
      </Title>
      <Paragraph
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "2.2rem",
        }}
      >
        Thời đại AI - Mà không dùng AI để tìm kiếm cơ hội đầu tư là một sai lầm?
      </Paragraph>
      <Space size="middle">
        <a
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
        </a>
        <a
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
            THAM GIA CLB "SIÊU CỔ PHIẾU"
          </Button>
        </a>
      </Space>
    </TextBox>
  </Banner>
);
