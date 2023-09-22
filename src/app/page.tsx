"use client";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Advertising from "@/common/components/__organisms/Advertising";
import DaysForecast from "@/common/components/__organisms/DaysForecast";
import TodaysHiglights from "@/common/components/__organisms/TodaysHiglights";
import Image from "next/image";
import weatherServices from "@/common/services/weatherService";
import { todaysWeatherProps } from "@/common/types/weatherTypes";
import { useGlobalContext } from "@/common/context/store";
import dynamic from "next/dynamic";
import HoursForecastMobile from "@/common/components/__organisms/HoursForecastMobile";
import DaysForeCastMobile from "@/common/components/__organisms/DaysForeCastMobile";
import TodaysHiglightsMobile from "@/common/components/__organisms/TodaysHighlightMobile";
import WeatherTodayMobile from "@/common/components/__organisms/WeatherTodayMobile";
import PinkGradient from "@/common/icons/pinkGradient";
import BgStars from "@/common/components/__molecules/bgStars";

const WeatherToday = dynamic(
  () => import("@/common/components/__organisms/WeatherToday"),
  { ssr: false }
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const {
    setGlobalTwentyFiveDays,
    setGlobalTodaysWeather,
    globalTodaysWeather,
  } = useGlobalContext();
  const { activeCity } = useGlobalContext();

  const getTodayWeather = async () => {
    weatherServices.getTodayWeather(setGlobalTodaysWeather, activeCity);
    weatherServices.getTwentyFiveDays(setGlobalTwentyFiveDays, activeCity);
  };

  useEffect(() => {
    getTodayWeather();
  }, [activeCity]);

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
        <main className="w-full bg-[#a7aec727] dark:bg-[#355a716b] px-[25px] pb-[25px] relative">
          <BgStars />
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
      <Analytics />
      <article className="flex flex-col gap-3 w-full h-full">
        <div className="flex gap-3 h-[55%]">
          <WeatherToday
            currentTemp={globalTodaysWeather?.currentTemp}
            currentWeatherDesc={globalTodaysWeather?.currentWeatherDesc}
            month={globalTodaysWeather?.month}
            day={globalTodaysWeather?.day}
            min={globalTodaysWeather?.minTemp}
            max={globalTodaysWeather?.maxTemp}
            windSpeed={globalTodaysWeather?.windSpeed}
          />
          <TodaysHiglights
            windSpeed={globalTodaysWeather?.windSpeed}
            visibility={globalTodaysWeather?.visibility}
            humidity={globalTodaysWeather?.humidity}
            feelsLike={globalTodaysWeather?.feelsLike}
            sunRise={globalTodaysWeather?.sunRise}
            sunSet={globalTodaysWeather?.sunSet}
          />
        </div>
        <div className="flex gap-3 xxl:h-[45%] md:h-[43%]">
          <DaysForecast />
          <Advertising />
        </div>
      </article>
    </main>
  );
}
