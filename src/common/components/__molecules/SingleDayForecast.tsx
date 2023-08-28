import CloudySun from "@/common/icons/cloudySun";
import React, { ReactNode } from "react";

interface SingleDayForecastProps {
  Icon: ReactNode;
  degree: string;
  date: string;
  day: string;
}

const SingleDayForecast = ({
  Icon,
  degree,
  date,
  day,
}: SingleDayForecastProps) => {
  return (
    <article className="w-full flex gap-4 xl:gap-12 items-center">
      <div className="flex gap-2 items-center">
        {Icon}
        <h1 className="text-[24px]">
          {degree}&deg;
          <span className="text-[#00000066] dark:text-[#FFFFFF99] md:text-base">
            /+17
          </span>
        </h1>
      </div>
      <p className="text-[#00000066]  md:text-sm xxl:text-[14px] dark:text-[#FFFFFF99]">
        {date}
      </p>
      <p className="text-[#00000066] md:text-sm xxl:text-[14px] dark:text-[#FFFFFF99]">
        {day}
      </p>
    </article>
  );
};

export default SingleDayForecast;
