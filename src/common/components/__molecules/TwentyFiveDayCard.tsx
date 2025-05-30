import { translateToLanguage } from "@/common/generalFunctions/functions";
import { WeatherIcons } from "@/common/icons/weatherIcons/WeatherIcons";
import { title } from "process";
import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  monthsArray,
  weathersArray,
  weekDaysArray,
} from "@/common/languageCases/arrays";
import { useGlobalContext } from "@/common/context/store";

interface TwentyFiveDayCardProps {
  date: string;
  icon: React.ReactNode;
  tempMax: string;
  tempMin: string;
  weather: string;
  index: number;
}

const TwentyFiveDayCard = ({
  date,
  icon,
  tempMax,
  tempMin,
  weather,
}: TwentyFiveDayCardProps) => {
  const { language } = useGlobalContext();
  return (
    <>
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={translateToLanguage(
          weather,
          weathersArray,
          language,
          "georgian"
        )}
        className="cursor-pointer justify-between flex flex-col items-center dark:bg-[#0000004D] bg-[#FFFFFF4D] rounded-[18px] w-[164px] h-[154px] md:h-[144px] md:w-[135px] px-[20px] py-[20px] xxl:px-[20px] xxl:py-[13px] xxl:w-[174px] xxl:h-[158px] md:px-2 md:py-3 "
      >
        <p className="dark:text-[#FFFFFFB2] text-[#000000B2] text-xs flex flex-col  text-center">
          {date.split("\n")[0].split(" ")[0]} {"   "}
          {translateToLanguage(
            date.split("\n")[0].split(" ")[1],
            monthsArray,
            language,
            "georgian"
          )}
          <span>
            {" "}
            {translateToLanguage(
              date.split("\n")[1],
              weekDaysArray,
              language,
              "georgian"
            )}
          </span>
        </p>
        <WeatherIcons iconName={weather} IconSize={50} />

        <div className="xxl:text-[22px] md:text-[18px] flex gap-[15px] text-[22px]">
          <p>
            {tempMax}
            <sup>°</sup>
          </p>
          <p className="dark:text-[#FFFFFFB2] text-[#000000B2]">
            {tempMin}
            <sup>°</sup>
          </p>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default TwentyFiveDayCard;
