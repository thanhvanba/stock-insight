import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import { ArrowRightOutlined } from "@ant-design/icons";

import look2 from "/carousel-1.jpg";
import look1 from "/carousel-2.jpg";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image: look1,
  },
  {
    id: 2,
    image: look2,
  },
];

export default function ShopTheLookSlider() {
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full h-[90vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        className="w-full overflow-hidden"
        loop={true}
        ref={swiperRef}
        onSlideChange={(s) => setActive(s.realIndex ?? s.activeIndex)}
      >
        {slides.map((slide, idx) => {
          return (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-[90vh]">
                <div
                  className="absolute inset-0 opacity-80 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide?.image})` }}
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="container mx-auto px-4 py-24 md:py-32 relative h-full flex text-end items-center justify-end">
                  <div className="max-w-3xl">
                    <h2 className="text-white mb-6 font-medium text-5xl leading-16">
                      ĐẦU TƯ THÔNG MINH CÙNG HỆ THỐNG AI VÀ KINH NGHIỆM THỰC
                      CHIẾN
                    </h2>
                    <p className="text-white text-lg md:text-xl mb-20 opacity-90">
                      Kết hợp công nghệ AI tiên tiến với kinh nghiệm đầu tư thực
                      tế để tối ưu hóa lợi nhuận của bạn.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-end gap-4">
                      <Link to="/lien-he">
                        <button className="bg-white hover:bg-[#0bce80] border-none px-6 py-2 rounded-3xl text-[#0bce80] text-lg font-medium hover:text-white flex items-center gap-2">
                          Yêu cầu tư vấn <ArrowRightOutlined />
                        </button>
                      </Link>
                      <Link to="/gioi-thieu">
                        <button className="hover:bg-black bg-[#0bce80] border-none px-6 py-2 rounded-3xl hover:text-[#0bce80] text-lg font-medium text-white flex items-center gap-2">
                          Tìm hiểu thêm
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom controls */}
      <div className="pointer-events-none absolute left-10 bottom-10 z-10 max-md:left-1/2 max-md:bottom-6 max-md:-translate-x-1/2">
        <div className="pointer-events-auto rounded-2xl bg-white/95 shadow-md overflow-hidden max-md:rounded-xl">
          <div className="grid grid-cols-3 divide-x divide-neutral-200">
            {/* Nút Previous */}
            <button
              className="p-4 text-[#0bce80] hover:bg-neutral-50 max-md:p-3"
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
            >
              <BsArrowLeftShort size={window.innerWidth < 768 ? 20 : 24} />
            </button>

            {/* Số slide */}
            <div className="p-4 text-sm text-neutral-700 text-center min-w-8 max-md:p-3 max-md:text-xs">
              {active + 1} / {slides.length}
            </div>

            {/* Nút Next */}
            <button
              className="p-4 text-[#0bce80] hover:bg-neutral-50 max-md:p-3"
              onClick={() => swiperRef.current?.swiper?.slideNext()}
            >
              <BsArrowRightShort size={window.innerWidth < 768 ? 20 : 24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
