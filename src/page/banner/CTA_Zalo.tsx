//@ts-nocheck
import Banner from "./Banner";
import TextBox from "./TextBox";

export const CallToActionZalo = () => (
  <Banner
    height="auto"
    backgroundImage="https://picsum.photos/800/280"
    className="py-10 md:py-16 bg-cover bg-center"
  >
    <TextBox align="center" maxWidth="100%">
      <h2
        className="text-white font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4 px-4"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Thời đại AI - Mà không dùng AI để đầu tư là một sai lầm?
      </h2>

      <p
        className="text-white/90 text-lg sm:text-xl md:text-2xl leading-snug max-w-3xl mx-auto mb-8 px-4"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Thời đại AI - Mà không dùng AI để tìm kiếm cơ hội đầu tư là một sai lầm?
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://zalo.me/g/vvvtqz849"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="px-6 py-3 rounded-md text-base font-semibold bg-white text-[#1890ff] hover:bg-gray-100 w-full sm:w-auto transition"
            data-aos="fade-up-right"
            data-aos-duration="1000"
          >
            HỖ TRỢ ĐẶT LỆNH MIỄN PHÍ
          </button>
        </a>

        <a
          href="https://zalo.me/g/vvvtqz849"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="px-6 py-3 rounded-md text-base font-semibold bg-white text-[#1890ff] hover:bg-gray-100 w-full sm:w-auto transition"
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            THAM GIA CLB "SIÊU CỔ PHIẾU"
          </button>
        </a>
      </div>
    </TextBox>
  </Banner>
);
