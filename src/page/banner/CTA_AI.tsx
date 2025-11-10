//@ts-nocheck
import Title from "antd/es/typography/Title";
import Banner from "./Banner";
import TextBox from "./TextBox";
import { Button, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";

export const CallToActionAI = () => {
  return (
    <div
      className="w-full bg-cover bg-center py-12 md:py-20"
      style={{ backgroundImage: "url('https://picsum.photos/800/280')" }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2
          className="text-white font-bold text-2xl sm:text-3xl md:text-5xl leading-tight mb-4"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Chỉ có 5% nhà đầu tư thành công nhờ "HỆ THỐNG"
        </h2>

        <p
          className="text-white/85 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Phân tích dữ liệu bằng AI • Phân tích kỹ thuật tự động • Xác định dòng
          tiền thị trường • Kinh nghiệm quản lý rủi ro
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md text-base font-medium w-full sm:w-auto"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            HỆ THỐNG KIẾN THỨC
          </button>

          <button
            className="px-6 py-3 bg-white text-gray-900 hover:bg-gray-200 rounded-md text-base font-medium w-full sm:w-auto"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            HỆ THỐNG AI ĐẦU TƯ
          </button>
        </div>

        {/* Nút Zalo nếu cần */}
        {/* 
        <a
          href="https://zalo.me/g/vvvtqz849"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 rounded-md text-base font-semibold hover:bg-gray-100">
            HỖ TRỢ ĐẶT LỆNH MIỄN PHÍ
          </button>
        </a>
        */}
      </div>
    </div>
  );
};
