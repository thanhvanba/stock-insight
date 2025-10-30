import { Button, Typography } from "antd";
import Banner from "./Banner";
import TextBox from "./TextBox";
// App.jsx hoặc trang của bạn
import { Space } from "antd";
import PopularSymbols from "../ticket";

const { Title, Paragraph, Text } = Typography;

// 1. Hero Center
export const HeroCenterBanner = () => (
  <Banner
    height="600px"
    backgroundImage="https://picsum.photos/1200/600"
    overlay={{ enabled: true, color: "rgba(0,0,0,0.4)" }}
    border={{
      width: { bottom: 4 },
      color: "#1890ff",
      margin: { bottom: "40px" },
    }}
  >
    <TextBox align="center">
      <Title style={{ color: "#fff" }} level={1}>
        Welcome to Our Site
      </Title>
      <Paragraph style={{ color: "#f0f0f0", fontSize: "18px" }}>
        This is a flexible banner with Ant Design.
      </Paragraph>
      <Space size="middle">
        <Button type="primary" size="large">
          Get Started
        </Button>
        <Button type="default" size="large">
          Learn More
        </Button>
      </Space>
    </TextBox>
  </Banner>
);

export const HeroLeftBanner = () => (
  <Banner
    height="600px"
    backgroundImage="https://picsum.photos/1200/600"
    overlay={{ enabled: true, color: "rgba(0,0,0,0.4)" }}
    border={{
      width: { bottom: 4 },
      color: "#1890ff",
      margin: { bottom: "40px" },
    }}
  >
    <TextBox align="left" maxWidth="600px">
      <Title style={{ color: "#fff" }} level={1}>
        Welcome to Our Site
      </Title>
      <Paragraph style={{ color: "#f0f0f0", fontSize: "18px" }}>
        This is a flexible banner with Ant Design.
      </Paragraph>
      <Space size="middle">
        <Button type="primary" size="large">
          Get Started
        </Button>
        <Button type="default" size="large">
          Learn More
        </Button>
      </Space>
    </TextBox>
  </Banner>
);
export const HeroRightBanner = () => (
  <Banner
    height="600px"
    backgroundImage="https://picsum.photos/1200/600"
    overlay={{ enabled: true, color: "rgba(0,0,0,0.4)" }}
    border={{
      width: { bottom: 4 },
      color: "#1890ff",
      margin: { bottom: "40px" },
    }}
  >
    <TextBox align="right" maxWidth="600px">
      <Title style={{ color: "#fff" }} level={1}>
        Welcome to Our Site
      </Title>
      <Paragraph style={{ color: "#f0f0f0", fontSize: "18px" }}>
        This is a flexible banner with Ant Design.
      </Paragraph>
      <Space size="middle">
        <Button type="primary" size="large">
          Get Started
        </Button>
        <Button type="default" size="large">
          Learn More
        </Button>
      </Space>
    </TextBox>
  </Banner>
);

export const FullscreenVideoBanner = () => (
  <Banner
    height="600px"
    video={{
      src: "https://youtu.be/zY3DuAPKrXQ?si=tgYUzLIAYM8qp6OD",
      autoPlay: true,
      muted: true,
      loop: true,
    }}
    overlay={{ enabled: true, color: "rgba(0,0,0,0.6)" }}
  >
    <TextBox align="center">
      <Title
        style={{ color: "#fff", fontSize: "3.5rem", marginBottom: "24px" }}
        level={1}
      >
        See It in Action
      </Title>
      <Paragraph
        style={{ color: "#f0f0f0", fontSize: "1.2rem", maxWidth: "700px" }}
      >
        Watch how our platform transforms workflows in real time.
      </Paragraph>
      <Button
        type="primary"
        size="large"
        style={{ marginTop: "32px", padding: "12px 32px" }}
      >
        Try It Yourself
      </Button>
    </TextBox>
  </Banner>
);

export const MinimalBanner = () => (
  <Banner height="300px" backgroundColor="#000">
    <TextBox align="center">
      <Title
        style={{
          color: "#fff",
          fontSize: "2.5rem",
          fontWeight: 300,
          margin: 0,
        }}
      >
        Thoughts on Design & Code
      </Title>
    </TextBox>
  </Banner>
);

export const CTABanner = () => (
  <Banner height="280px" backgroundImage="https://picsum.photos/800/280">
    <TextBox align="center">
      <Title
        style={{ color: "#fff", fontSize: "2.2rem", marginBottom: "16px" }}
        level={2}
      >
        Thời đại AI không dùng AI để đầu tư là một sai lầm?
      </Title>
      <Paragraph
        style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: "18px",
          maxWidth: "600px",
        }}
      >
        Join thousands of teams who ship faster with our platform.
      </Paragraph>
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
    </TextBox>
  </Banner>
);

export const AnnouncementBanner = () => (
  <Banner height="56px" backgroundColor="#fffbe6" sticky={true}>
    <TextBox align="center">
      <Text type="warning" style={{ fontSize: "14px" }}>
        🚀 Text
      </Text>
    </TextBox>
  </Banner>
);

export const LinkedCardBanner = () => (
  <Banner
    height="400px"
    backgroundImage="https://picsum.photos/800/400"
    link={{ url: "/blog/new-feature", target: "_self" }}
    overlay={{ enabled: true, color: "rgba(0,0,0,0.4)" }}
    border={{
      radius: "12px",
      width: { bottom: 4 },
      margin: { bottom: "40px" },
    }}
    style={{ boxShadow: "0 6px 16px rgba(0,0,0,0.1)" }}
  >
    <TextBox align="left" maxWidth="500px">
      <Title
        style={{ color: "#fff", fontSize: "2rem", marginBottom: "12px" }}
        level={2}
      >
        Introducing Smart Analytics
      </Title>
      <Paragraph style={{ color: "#f0f0f0", fontSize: "16px" }}>
        See how AI helps you make better decisions — in real time.
      </Paragraph>
    </TextBox>
  </Banner>
);

export const SplitContentBanner = () => (
  <Banner
    height="500px"
    backgroundImage="https://picsum.photos/1000/500?grayscale"
    overlay={{ enabled: true, color: "rgba(0,0,0,0.3)" }}
  >
    <TextBox align="right" maxWidth="550px">
      <Title style={{ color: "#fff" }} level={1}>
        Built for Teams
      </Title>
      <Paragraph style={{ color: "#f0f0f0", fontSize: "18px" }}>
        Collaborate in real time, assign tasks, and track progress — all in one
        place.
      </Paragraph>
      <Button type="primary" size="large" style={{ marginTop: "20px" }}>
        Invite Your Team
      </Button>
    </TextBox>
  </Banner>
);
