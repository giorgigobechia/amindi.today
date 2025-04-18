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

const DaysForecast = ({ activeData, setActiveData }: any) => {
  const { language } = useGlobalContext();
  const { globalTwentyFiveDays, globalTwentyFourHours } = useGlobalContext();

  return (
    <section className="flex flex-col gap-3 xxl:rounded-[34px] md:rounded-[26px] w-[30%] h-full relative">
      <WhiteIcon
        width={260}
        height={260}
        className="absolute top-[30px] right-0 z-[-99]"
      />
      <BlueIcon
        width={250}
        height={250}
        className="absolute left-[62%] translate-x-[-50%] bottom-0 z-[-5]"
      />
      <div className="w-full flex justify-between items-center h-[8%]">
        <h2 className="xxl:text-[20px] md:text-base">
          {" "}
          {activeData === TEXTS[language].twentyfourHours
            ? TEXTS[language]?.twentyfourDayForecast
            : TEXTS[language]?.sevenDayForecast}
        </h2>
        <OptSelect activeData={activeData} setActiveData={setActiveData} />
      </div>
      <div className=" w-full bg-[#cea9a927] dark:bg-[#355a7145] rounded-[34px] p-[20px_15px_15px] relative h-[92%] flex flex-col justify-between overflow-hidden">
        <div className="flex flex-col gap-2 scroll pr-1 h-[135px] xxl:h-[280px]">
          {activeData === TEXTS[language].twentyfourHours
            ? globalTwentyFourHours?.map((day: any, index: any) => (
                <React.Fragment key={index}>
                  <SingleDayForecast
                    key={index}
                    temp={day.temperature}
                    time={day.time}
                    weather={day.weather}
                  />
                </React.Fragment>
              ))
            : globalTwentyFiveDays?.slice(0, 7).map((day: any, index: any) => (
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
        <DetailedDayForecast tommorowData={globalTwentyFiveDays[1]} />
      </div>
    </section>
  );
};

export default DaysForecast;
