import SunIcon from "@/common/icons/sunIcon";
import React, { useRef, useState } from "react";

interface HourData {
  time: string;
  temperature: string;
}

function SingleHourForecastMobile({ time, temperature }: HourData) {
  return (
    <>
      <div className="flex flex-col items-center max-w-[20px] w-full">
        <p className="text-[14px] font-normal">{time}</p>
        <SunIcon className="w-[25px] h-[25px]" />
        <h3 className="font-[400] text-[14px] leading-normal">
          {temperature}
          <sup>o</sup>
        </h3>
      </div>
    </>
  );
}

export default SingleHourForecastMobile;
