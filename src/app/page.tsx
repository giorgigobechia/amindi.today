'use client'
import { useState, useEffect } from 'react';

import Advertising from "@/common/components/__organisms/Advertising";
import DaysForecast from "@/common/components/__organisms/DaysForecast";
import TodaysHiglights from "@/common/components/__organisms/TodaysHiglights";
import WeatherToday from "@/common/components/__organisms/WeatherToday";
import Image from "next/image";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isMobile) {
    return <p>MOBILE GOES HERE</p>;
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
