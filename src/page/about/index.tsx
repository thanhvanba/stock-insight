import { Row, Col, Card, Typography } from "antd";
import {
  ArrowUpOutlined,
  UsergroupAddOutlined,
  TrophyOutlined,
  AimOutlined,
} from "@ant-design/icons";

export default function AboutPage() {
  const { Title, Paragraph } = Typography;
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          background: "#263c54",
          color: "#fff",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <Title
          style={{ color: "#fff", marginBottom: 16 }}
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Giới thiệu
        </Title>
        <Paragraph
          style={{ color: "#e6f7ff", fontSize: 16 }}
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          TỪ KỸ SƯ ĐIỆN ĐẾN TƯ VẤN ĐẦU TƯ
        </Paragraph>
      </section>
      <section className="py-16 px-4 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <Row gutter={32} align="middle" justify="center">
            <Col xs={24} md={12}>
              <div
                className="h-[500px] overflow-hidden rounded-xl shadow-md"
                data-aos="flip-right"
                data-aos-duration="500"
              >
                <img
                  src="/kim-tu-do.jpg"
                  alt="Anh Tuấn"
                  className="w-full h-full object-fill"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <h2 className="font-medium text-5xl mb-6"></h2>
              <div className="space-y-3 text-lg text-gray-700">
                <p data-aos="fade-right" data-aos-duration="500">
                  Xin chào, tôi là Lê Tuấn. Tôi xin chia sẽ về hành trình thay
                  đổi để sống sung túc và bình an hơn. Từ một kỹ sư điện, sau
                  hơn 10 năm làm việc trong ngành điện, tôi đã chuyển sang nghề
                  tư vấn đầu tư tài chính từ năm 2015 đến nay.
                </p>
                <p data-aos="fade-right" data-aos-duration="1000">
                  Hơn 10 năm với nghề thi công & thiết kế điện đã rèn cho tôi :
                  sự chính xác, kiên nhẫn, kỷ luật và tư duy hệ thống
                </p>
                <p data-aos="fade-right" data-aos-duration="1500">
                  Sau đó 2015 đến với nghề tư vấn đầu tư, đúng đam mê, đúng môi
                  trường đã giúp tôi có nhiều thời gian hơn cho bản thân, gia
                  đình và tự chủ được thời gian Từ đó tâm trí thoải mái, sức
                  khoẻ tốt hơn nên có thể tạo ra nhiều giá trị, tài sản bền vững
                  hơn cho các con sau này.
                </p>
                <p data-aos="fade-right" data-aos-duration="2000">
                  Giờ tôi vẫn là kỹ sư nhưng là KỸ SƯ ĐẦU TƯ (TÀI CHÍNH): Thiết
                  kế & quản lý hệ thống tài chính cá nhân cho chính mình và nhà
                  đầu tư. Phù hợp với KIM TỨ ĐỒ : dùng tiền làm việc cho mình,
                  lúc mình ngủ hay đi du lịch tiền vẫn sinh lời. Và bây giờ tôi
                  sẽ chia sẽ các bước và phương pháp giao dịch thành công lại
                  cho bạn.
                </p>
                <p
                  className="font-medium"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Sứ mệnh của tôi là chia sẻ kiến thức và kinh nghiệm để giúp
                  các nhà đầu tư Việt Nam đầu tư thông minh và bền vững hơn.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4">
        <h2
          className="text-center text-[#0bce80] text-2xl font-bold md:text-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Thành tựu nổi bật
        </h2>
        <Row
          gutter={[24, 24]}
          justify="center"
          className="mt-8"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {[
            {
              icon: <ArrowUpOutlined />,
              value: "10+",
              label: "Năm kinh nghiệm",
            },
            {
              icon: <UsergroupAddOutlined />,
              value: "500+",
              label: "Học viên đã đào tạo",
            },
            {
              icon: <TrophyOutlined />,
              value: "25-35%",
              label: "Tỷ suất sinh lời/năm",
            },
            {
              icon: <AimOutlined />,
              value: "95%",
              label: "Học viên hài lòng",
            },
          ].map((item, i) => (
            <Col xs={24} md={12} lg={6} key={i}>
              <Card bordered hoverable className="text-center">
                <div className="text-5xl text-[#0bce80] mb-4">{item.icon}</div>
                <h2 className="text-4xl text-[#ff0017]">{item.value}</h2>
                <p className="text-2xl text-[#ff0017]">{item.label}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Investment System Section */}
      <section className="py-16 px-4">
        <h2
          className="text-center text-[#0bce80] text-2xl font-bold md:text-3xl"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Hệ thống đầu tư AI
        </h2>
        <div className="max-w-[1024px] mx-auto mt-8">
          <p
            className="text-center text-[24px]"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Hệ thống đầu tư của tôi được xây dựng dựa trên 4 trụ cột chính:
          </p>
          <Row gutter={[24, 24]} className="mt-6">
            {[
              {
                h2: "🚀 ROBOT AI SĂN CỔ PHIẾU ĐỘT PHÁ",
                content:
                  "Công cụ cốt lõi. Chúng tôi dùng Trí tuệ Nhân tạo (AI) để quét và phân tích *hàng ngàn cổ phiếu* mỗi ngày, tự động tìm ra những ứng viên có tiềm năng tăng trưởng cao nhất mà nhà đầu tư cá nhân thường bỏ lỡ.",
              },
              {
                h2: "🧠 CÔNG NGHỆ MACHINE LEARNING",
                content:
                  "Áp dụng thuật toán Machine Learning độc quyền để phân tích dữ liệu lịch sử, nhận diện các mô hình hành vi giá, và *dự đoán chính xác* xu hướng ngắn/trung hạn của thị trường.",
              },
              {
                h2: "🌊 DÒNG TIỀN THÔNG MINH (Smart Money Flow)",
                content:
                  "Theo dõi sát sao động thái *dòng tiền tổ chức, tự doanh và khối ngoại* trên từng cổ phiếu. Giúp bạn xác định được ngành và mã cổ phiếu đang được 'cá mập' gom hàng trước khi sóng lớn hình thành.",
              },
              {
                h2: "🛡️ QUẢN LÝ RỦI RO CHUYÊN NGHIỆP",
                content:
                  "Tín hiệu MUA/BÁN kèm theo *Giá Cắt Lỗ (Stop-loss)* và *Giá Mục Tiêu (Take-profit)* rõ ràng. Hệ thống giúp bạn tự động tính toán kích thước vị thế, đảm bảo kỷ luật và bảo toàn vốn tối đa.",
              },
            ].map((item, i) => (
              <Col
                xs={24}
                md={12}
                key={i}
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <Card bordered className="h-full">
                  <h2 className="text-xl">{item.h2}</h2>
                  <p className="text-base">{item.content}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-[#f5f5f5]">
        <h2
          className="text-center text-[#0bce80] text-2xl font-bold md:text-3xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Triết lý đầu tư
        </h2>
        <div
          className="max-w-[800px] mx-auto mt-8"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          {[
            {
              h2: "1. Đầu tư dựa trên hệ thống, không cảm tính",
              content:
                "Mọi quyết định đầu tư phải dựa trên dữ liệu, phân tích kỹ thuật và tín hiệu rõ ràng từ hệ thống. Loại bỏ cảm xúc khỏi quá trình ra quyết định.",
            },
            {
              h2: "2. Quản lý rủi ro là ưu tiên hàng đầu",
              content:
                "Bảo vệ vốn quan trọng hơn tìm kiếm lợi nhuận. Luôn đặt stop-loss và không bao giờ mạo hiểm quá 2% vốn trong một giao dịch.",
            },
            {
              h2: "3. Kết hợp công nghệ và kinh nghiệm",
              content:
                "Sử dụng AI và công nghệ để phân tích dữ liệu lớn, nhưng kết hợp với kinh nghiệm thực chiến để đưa ra quyết định cuối cùng.",
            },
            {
              h2: "4. Học hỏi không ngừng",
              content:
                "Thị trường luôn thay đổi. Nhà đầu tư thành công là người không ngừng học hỏi, thích nghi và cải thiện hệ thống của mình.",
            },
          ].map((item, i) => (
            <Card key={i} className="mb-6">
              <h2 className="text-2xl">{item.h2}</h2>
              <p className="text-lg">{item.content}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
