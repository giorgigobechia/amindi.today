import CloudySun from "@/common/icons/cloudySun";
import DetailedDayForecastIcon from "@/common/icons/deatiledDayForecastIcon";
import React from "react";

const DetailedDayForecast = () => {
  return (
    <article className="w-full h-[40%] flex items-center justify-between bg-gradient-to-r bg-[#ffffff7f] dark:from-[#606162eb] dark:via-[#1d1c1cf5] dark:to-[#0c0c0c] rounded-[18px] px-[18px]">
      <div className="flex items-center gap-3">
        <CloudySun width={52} height={53} />
        <div className="h-full text-[14px] flex flex-col justify-center text-[#000000b2]">
          <p className="dark:text-[#FFFFFF99]">Tomorrow</p>
          <h2 className="text-[28px] leading-6 font-medium dark:text-white">
            15&deg;
          </h2>

          <p className="dark:text-[#FFFFFF99]">Fog Storm Day</p>
        </div>
      </div>
      <DetailedDayForecastIcon />
    </article>
  );
};

export default DetailedDayForecast;
