import SingleHourForecastMobile from "../__molecules/SingleHourForecastMobile";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay, Mousewheel } from "swiper/modules";

interface HourData {
  time: string;
  temperature: string;
}
function HoursForecastMobile() {
  const hoursData: HourData[] = [
    { time: "Now", temperature: "+19" },
    { time: "12", temperature: "+13" },
    { time: "13", temperature: "-28" },
    { time: "14", temperature: "+38" },
    { time: "15", temperature: "+28" },
    { time: "16", temperature: "+18" },
    { time: "17", temperature: "+18" },
    { time: "18", temperature: "+18" },
    { time: "19", temperature: "+18" },
    { time: "20", temperature: "+18" },
    { time: "21", temperature: "+18" },
    { time: "22", temperature: "+18" },
    { time: "23", temperature: "+18" },
    { time: "00", temperature: "+18" },
    { time: "01", temperature: "+18" },
    { time: "02", temperature: "+18" },
    { time: "03", temperature: "+18" },
    { time: "04", temperature: "+18" },
    { time: "05", temperature: "+18" },
    { time: "06", temperature: "+18" },
    { time: "07", temperature: "+18" },
    { time: "08", temperature: "+18" },
    { time: "09", temperature: "+18" },
    { time: "10", temperature: "+18" },
  ];

  return (
    <Swiper
      loopedSlides={24}
      slidesPerView={3}
      spaceBetween={70}
      freeMode={true}
      allowTouchMove={true}
      grabCursor={true}
      draggable={true}
      loop={true}
      modules={[FreeMode, Autoplay]}
      className="HoursForecast bg-[#FFFFFF4D] dark:bg-[#0000004D]"
      autoplay={{ delay: 0, disableOnInteraction: false }}
      speed={2000}
    >
      <div className="max-w-[378px] w-full h-[121px] bg-[#0000004D] rounded-[18px] flex items-center px-[22px]">
        <div className="flex items-center">
          {hoursData.map((hour, index) => (
            <SwiperSlide key={index}>
              <SingleHourForecastMobile {...hour} />
            </SwiperSlide>
          ))}
        </div>
      </div>
    </Swiper>
  );
}

export default HoursForecastMobile;
