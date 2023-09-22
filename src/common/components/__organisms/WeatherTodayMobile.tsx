"use client";
import { useGlobalContext } from "@/common/context/store";
import { translateToLanguage } from "@/common/generalFunctions/functions";
import CalendarIcon from "@/common/icons/calendarIcon";
import EmptyCalendarIcon from "@/common/icons/emptyCalendarIcon";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import LocationIcon from "@/common/icons/locationIcon";
import PinkGradient from "@/common/icons/pinkGradient";
import SearchIcon from "@/common/icons/searchIcon";
import SunIcon from "@/common/icons/sunIcon";
import { WeatherIcons } from "@/common/icons/weatherIcons/WeatherIcons";
import { citiesArray, weathersArray } from "@/common/languageCases/arrays";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

interface PropsTypes {
  currentTemp: number;
  currentWeatherDesc: string;
}

const WeatherTodayMobile = ({
  currentTemp,
  currentWeatherDesc,
}: PropsTypes) => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();
  const { activeCity } = useGlobalContext();

  return (
    <section className="md:p-4 pt-[20px] pb-[32px] flex flex-col justify-between mx-auto items-center">
      <div className="flex w-full items-center justify-center  gap-[5px]">
        <WeatherIcons iconName={currentWeatherDesc} IconSize={48} />
        <p className="text-[40px] leading-normal text-white">
          {" "}
          {translateToLanguage(activeCity, citiesArray, language, "english")}
        </p>
      </div>
      <h3 className="text-[80px] font-[300] leading-normal">
        {currentTemp}
        <sup>°</sup>C
      </h3>

      <div className="max-w-[168px] w-full">
        <p className="text-[#FFFFFFB2] text-[14px] font-[400] leading-normal text-center">
          {translateToLanguage(
            currentWeatherDesc,
            weathersArray,
            language,
            "georgian"
          )}
        </p>
      </div>
      <Link
        className="underline pt-[10px] pb-[15px] text-center"
        href={"/twentyfive-days"}
      >
        25 {TEXTS[language].days}
      </Link>
    </section>
  );
};

export default WeatherTodayMobile;
