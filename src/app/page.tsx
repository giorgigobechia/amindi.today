"use client";
import { useState, useEffect } from "react";
import Advertising from "@/common/components/__organisms/Advertising";
import DaysForecast from "@/common/components/__organisms/DaysForecast";
import TodaysHiglights from "@/common/components/__organisms/TodaysHiglights";
import WeatherToday from "@/common/components/__organisms/WeatherToday";
import Image from "next/image";
import WeatherTodayMobile from "@/common/components/__organisms/WeatherTodayMobile";
import HoursForecastMobile from "@/common/components/__organisms/HoursForecastMobile";
import DaysForeCastMobile from "@/common/components/__organisms/DaysForeCastMobile";
import TodaysHiglightsMobile from "@/common/components/__organisms/TodaysHighlightMobile";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <main className="w-full bg-[#355a716b] px-[25px]">
          <article className="">
            <div className="flex flex-col justify-center items-center gap-[10px]">
              <WeatherTodayMobile />
              <HoursForecastMobile />
              <DaysForeCastMobile />
              <TodaysHiglightsMobile />
            </div>
          </article>
        </main>
      </>
    );
  }

  return (
    <main className="w-full">
      <article className="flex flex-col gap-3 w-full h-full">
        <div className="flex gap-3 h-[55%]">
          <WeatherToday />
          <TodaysHiglights />
        </div>
        <div className="flex gap-3 xxl:h-[45%] md:h-[43%]">
          <DaysForecast />
          <Advertising />
        </div>
      </article>
    </main>
  );
}
