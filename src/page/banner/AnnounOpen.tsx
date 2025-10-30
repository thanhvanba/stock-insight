//@ts-nocheck
import { Typography } from "antd";
import Banner from "./Banner";
import TextBox from "./TextBox";
const { Title, Paragraph } = Typography;

export default function AnnounOpen() {
  return (
    <Banner
      height="600px"
      backgroundImage="https://picsum.photos/1200/600"
      overlay={{ enabled: true, color: "rgba(0,0,0,0.4)" }}
      border={{
        width: { bottom: 0 },
        margin: { bottom: "40px" },
      }}
    >
      <TextBox align="center" maxWidth="100%">
        <Title style={{ color: "#c9111f", fontWeight: "bold" }} level={1}>
          Tại sao 95% nhà đầu tư thua lỗ trên thị trường chứng khoán?
        </Title>
        <Paragraph
          style={{
            color: "#1aa67c",
            fontSize: "38px",
            fontWeight: "bold",
          }}
        >
          Chỉ 5% người chiến thắng có thể kiếm được tiền từ 95% người thua lỗ
          còn lại?
        </Paragraph>
        {/* <Space size="middle">
          <Button type="primary" size="large">
            Get Started
          </Button>
          <Button type="default" size="large">
            Learn More
          </Button>
        </Space> */}
      </TextBox>
    </Banner>
  );
}
