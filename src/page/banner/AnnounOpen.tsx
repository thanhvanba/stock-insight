//@ts-nocheck
import Banner from "./Banner";
import TextBox from "./TextBox";

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
        <h2
          className="text-[#c9111f] font-extrabold text-2xl sm:text-3xl md:text-5xl leading-tight mb-4 px-4"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Tại sao 95% nhà đầu tư thua lỗ trên thị trường chứng khoán?
        </h2>

        <p
          className="text-[#1aa67c] font-extrabold text-xl sm:text-2xl md:text-4xl leading-tight max-w-4xl mx-auto px-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Chỉ 5% người chiến thắng có thể kiếm được tiền từ 95% người thua lỗ
          còn lại?
        </p>
      </TextBox>
    </Banner>
  );
}
