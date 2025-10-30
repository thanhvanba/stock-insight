//@ts-nocheck
import { Typography } from "antd";
const { Text } = Typography;
import Banner from "./Banner";
import TextBox from "./TextBox";

export default function MiniHeader() {
  return (
    <Banner height="56px" backgroundColor="#fffbe6" sticky={true}>
      <TextBox align="center">
        <Text type="warning" style={{ fontSize: "14px" }}>
          🚀 Nhận định: thị trường UP - MUA
        </Text>
      </TextBox>
    </Banner>
  );
}
