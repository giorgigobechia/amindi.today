import SunIcon from "@/common/icons/sunIcon";
import { WeatherIcons } from "@/common/icons/weatherIcons/WeatherIcons";
import React, { useRef, useState } from "react";

interface HourData {
  time: string;
  temperature: number;
  weather: string;
}

function SingleHourForecastMobile({ time, temperature, weather }: HourData) {
  return (
    <>
      <div className="flex flex-col items-center max-w-[20px] w-full">
        <p className="text-[14px] font-normal">{time.split(" ")[0]}</p>
        <WeatherIcons iconName={weather} IconSize={25} />
        <h3 className="font-[400] text-[14px] leading-normal">
          {temperature}
          <sup>°</sup>
        </h3>
      </div>
    </>
  );
}

export default SingleHourForecastMobile;
