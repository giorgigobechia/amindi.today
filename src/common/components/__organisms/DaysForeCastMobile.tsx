"use client";
import React, { useEffect, useState } from "react";
import SingleDayForecast from "../__molecules/SingleDayForecast";
import CloudySun from "@/common/icons/cloudySun";
import DetailedDayForecast from "../__molecules/DetailedDayForecast";
import LightningIcon from "@/common/icons/lightningIcon";
import WindIcon from "@/common/icons/windIcon";
import TEXTS from "@/languages/Languages";
import { useGlobalContext } from "@/common/context/store";
import weatherServices from "@/common/services/weatherService";
import OptSelect from "../__atoms/OptSelect";
import BlueIcon from "@/common/icons/24HourBlueIcon";
import WhiteIcon from "@/common/icons/24HourWhiteIcon";
import OptSelectMobile from "../__atoms/OptSelectMobile";

const DaysForecast = () => {
  const { language } = useGlobalContext();
  const [hourlyWeather, setHourlyWeather] = useState<any>([]);
  const [activeData, setActiveData] = useState<string>("24 საათი");
  const { activeCity, globalTwentyFiveDays } = useGlobalContext();
  const getHourlyWeather = async () => {
    await weatherServices.getHourlyWeather(setHourlyWeather, activeCity);
  };

  useEffect(() => {
    getHourlyWeather();
    setActiveData("24 საათი");
  }, [activeCity]);
  return (
    <section className="flex flex-col gap-3 xxl:rounded-[34px] md:rounded-[26px] max-w-[378px] w-full h-full relative">
      <div className="w-full bg-[#FFFFFF4D] dark:bg-[#0000004D] rounded-[34px] min-h-[411px] px-[25px] py-[20px] relative h-[92%] flex flex-col justify-between gap-[30px]">
        <div className="w-full flex justify-between items-center h-[31px]">
          <h2 className="xxl:text-[20px] md:text-lg text-[14px]">
            {activeData === "24 საათი"
              ? TEXTS[language]?.twentyfourDayForecast
              : TEXTS[language]?.sevenDayForecast}
          </h2>
          <OptSelectMobile
            activeData={activeData}
            setActiveData={setActiveData}
          />
        </div>
        <div className="flex flex-col gap-2 scroll pr-1 h-[400px] xxl:h-[280px]">
          {activeData === "24 საათი"
            ? hourlyWeather?.map((day: any, index: any) => (
                <React.Fragment key={index}>
                  <SingleDayForecast
                    key={index}
                    temp={day.temperature}
                    time={day.time}
                    weather={day.weather}
                  />
                </React.Fragment>
              ))
            : globalTwentyFiveDays?.map((day: any, index: any) => (
                <React.Fragment key={index}>
                  <SingleDayForecast
                    key={index}
                    tempMin={day.tempMin}
                    tempMax={day.tempMax}
                    time={day.date}
                    weather={day.weather}
                    type="weekDays"
                  />
                </React.Fragment>
              ))}
        </div>
      </div>
    </section>
  );
};

export default DaysForecast;
