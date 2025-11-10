import { ArrowRightOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import look1 from "/carousel-1.jpg";
import look2 from "/carousel-2.jpg";

const slides = [
  { id: 1, image: look1 },
  { id: 2, image: look2 },
];

export default function ShopTheLookSlider() {
  const swiperRef = useRef<any>(null);
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full h-[92vh] max-md:h-[85vh] max-sm:h-[70vh]">
      <Swiper
        spaceBetween={0}
        centeredSlides
        className="w-full overflow-hidden"
        loop
        ref={swiperRef}
        onSlideChange={(s) => setActive(s.realIndex ?? s.activeIndex)}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[92vh] max-md:h-[85vh] max-sm:h-[70vh]">
              <div
                className="absolute inset-0 opacity-80 bg-cover bg-center transition-all duration-500"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="container mx-auto px-4 md:px-8 py-20 md:py-32 relative h-full flex items-center justify-end text-right">
                <div className="max-w-3xl text-white">
                  <h2
                    className="font-medium text-3xl sm:text-4xl md:text-5xl leading-tight my-6"
                    data-aos="zoom-in-up"
                    data-aos-duration="500"
                  >
                    ĐẦU TƯ THÔNG MINH CÙNG HỆ THỐNG AI VÀ KINH NGHIỆM THỰC CHIẾN
                  </h2>

                  <p
                    className="text-base sm:text-lg md:text-xl mb-10 opacity-90"
                    data-aos="fade-up-right"
                    data-aos-duration="1000"
                  >
                    Kết hợp công nghệ AI tiên tiến với kinh nghiệm đầu tư thực
                    tế để tối ưu hóa lợi nhuận của bạn.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4">
                    <Link to="/lien-he">
                      <button
                        className="w-full sm:w-auto bg-white hover:bg-[#0bce80] border-none px-5 sm:px-6 py-2 rounded-3xl text-[#0bce80] text-base sm:text-lg font-medium hover:text-white flex items-center justify-center gap-2 transition-all duration-300"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                      >
                        Yêu cầu tư vấn <ArrowRightOutlined />
                      </button>
                    </Link>
                    <Link to="/gioi-thieu">
                      <button
                        className="w-full sm:w-auto bg-[#0bce80] hover:bg-black border-none px-5 sm:px-6 py-2 rounded-3xl text-white hover:text-[#0bce80] text-base sm:text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                      >
                        Tìm hiểu thêm
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom controls */}
      <div className="container relative">
        <div className="hidden md:block pointer-events-none absolute left-4 sm:left-6 md:left-8 lg:left-10 bottom-10 max-md:bottom-4 z-10">
          <div className="pointer-events-auto rounded-2xl bg-white/95 shadow-md overflow-hidden max-md:rounded-xl">
            <div className="grid grid-cols-3 divide-x divide-neutral-200">
              {/* Prev */}
              <button
                className="p-4 text-[#0bce80] hover:bg-neutral-50 max-md:p-3"
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
              >
                <BsArrowLeftShort
                  size={
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? 20
                      : 24
                  }
                />
              </button>

              {/* Slide Counter */}
              <div className="p-4 text-sm text-neutral-700 text-center min-w-8 max-md:p-2 max-md:text-xs">
                {active + 1} / {slides.length}
              </div>

              {/* Next */}
              <button
                className="p-4 text-[#0bce80] hover:bg-neutral-50 max-md:p-3"
                onClick={() => swiperRef.current?.swiper?.slideNext()}
              >
                <BsArrowRightShort
                  size={
                    typeof window !== "undefined" && window.innerWidth < 768
                      ? 20
                      : 24
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
