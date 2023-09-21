"use client";
import { useGlobalContext } from "@/common/context/store";
import { translateToLanguage } from "@/common/generalFunctions/functions";
import CloudySun from "@/common/icons/cloudySun";
import DetailedDayForecastIcon from "@/common/icons/deatiledDayForecastIcon";
import { WeatherIcons } from "@/common/icons/weatherIcons/WeatherIcons";
import { weathersArray } from "@/common/languageCases/arrays";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import React from "react";
import { Tooltip } from "react-tooltip";

const DetailedDayForecast = ({ tommorowData }: any) => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();
  return (
    <>
      <article
        data-tooltip-id="tomorrowWeather"
        data-tooltip-content={translateToLanguage(
          tommorowData?.weather,
          weathersArray,
          language,
          "georgian"
        )}
        className="w-full md:h-[30%] xxl:h-[25%] flex items-center justify-between cursor-pointer"
        style={{
          background:
            resolvedTheme === "light"
              ? "rgba(255, 255, 255, 0.50)"
              : "linear-gradient(290deg, rgba(21, 23, 26, 0.99) 60.04%, rgba(67, 69, 71, 0.19) 69.38%, rgba(116, 117, 119, 0.38) 83.13%, rgba(255, 255, 255, 0.34) 107.2%, rgba(21, 23, 26, 0.30) 111.12%)",
          borderRadius: "18px",
          padding: "18px",
        }}
      >
        <div className="flex items-center gap-3">
          <WeatherIcons iconName={tommorowData?.weather} IconSize={50} />
          <div className="h-full text-[14px] flex flex-col justify-center text-[#000000b2]">
            <p className="dark:text-[#FFFFFF99]">
              {" "}
              {TEXTS[language]?.tomorrow}
            </p>
            <h2 className="text-[28px] leading-6 font-medium dark:text-white">
              {tommorowData?.tempMax}&deg;
            </h2>

            <p className="dark:text-[#FFFFFF99] w-[100px]  overflow-hidden whitespace-nowrap overflow-ellipsis ">
              {translateToLanguage(
                tommorowData?.weather,
                weathersArray,
                language,
                "georgian"
              )}
            </p>
          </div>
        </div>
        <DetailedDayForecastIcon />
      </article>
      <Tooltip id="tomorrowWeather" />
    </>
  );
};

export default DetailedDayForecast;
