import CloudySun from "@/common/icons/cloudySun";
import React, { ReactNode } from "react";

interface SingleDayForecastProps {
  Icon: ReactNode;
  degree: string;
  date: string;
  day: string;
}

const SingleDayForecast = ({ Icon, degree, date, day }: SingleDayForecastProps) => {
  return (
    <div className="w-full flex gap-4 items-center">
      <div className="flex gap-2 items-center">
        {Icon}
        <h1 className="text-[24px]">
          {degree}&deg;<span className="text-[#00000066]">/+17</span>
        </h1>
      </div>
      <p className="text-[#00000066] text-[14px]">{date}</p>
      <p className="text-[#00000066] text-[14px]">{day}</p>
    </div>
  );
};

export default SingleDayForecast;
