import CloudySun from "@/common/icons/cloudySun";
import { WeatherIcons } from "@/common/icons/weatherIcons/WeatherIcons";
import React, { ReactNode } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
interface SingleDayForecastProps {
  temp?: string;
  time: string;
  weather: string;
  type?: string;
  tempMin?: number;
  tempMax?: number;
}

const SingleDayForecast = ({
  temp,
  tempMin,
  tempMax,
  time,
  weather,
  type,
}: SingleDayForecastProps) => {
  return (
    <>
      <article
        data-tooltip-id="hourlyWeather"
        data-tooltip-content={weather.length > 18 ? weather : ""}
        className="w-full flex gap-4 xl:gap-12 items-center justify-between"
      >
        {type !== "weekDays" ? (
          <div className="flex gap-2 items-center">
            <WeatherIcons iconName={weather} IconSize={25} />
            <h1 className="text-[24px] max-[385px]:text-[19px]">{temp}&deg;</h1>
          </div>
        ) : (
          <div className="flex gap-2 items-center ">
            <WeatherIcons iconName={weather} IconSize={25} />
            <div className="flex items-center">
              <h1 className="text-[20px] xxl:text-[24px] max-[385px]:text-[17px]">
                {tempMax}&deg;
              </h1>
              /
              <h1 className="text-[16px] xxl:text-[20px] text-[#FFFFFF66]">
                {tempMin}&deg;
              </h1>
            </div>
          </div>
        )}
        <p
          id="weatherContent"
          className="text-[#00000066] md:text-sm xxl:text-[14px] dark:text-[#FFFFFF99] w-[40%] overflow-hidden whitespace-nowrap overflow-ellipsis max-[385px]:text-[12px]"
        >
          {weather}
        </p>
        {/* <p className="text-[#00000066] md:text-sm xxl:text-[14px] dark:text-[#FFFFFF99] max-[385px]:text-[12px]">
          {day}
        </p> */}
      </article>
      <Tooltip id="hourlyWeather" />
    </>
  );
};

export default SingleDayForecast;
