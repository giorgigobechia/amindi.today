import CloudySun from "@/common/icons/cloudySun";
import DetailedDayForecastIcon from "@/common/icons/deatiledDayForecastIcon";
import React from "react";

const DetailedDayForecast = () => {
  return (
    <article className="w-full h-[40%] flex items-center justify-between bg-[#ffffff7f] rounded-[18px] px-[18px]">
      <div className="flex items-center gap-3">
        <CloudySun width={52} height={53} />
        <div className="h-full text-[14px] flex flex-col justify-center text-[#000000b2]">
          <p>Tomorrow</p>
          <h2 className="text-[28px] leading-6 font-medium text-black">15&deg;</h2>
          <p>Fog Storm Day</p>
        </div>
      </div>
      <DetailedDayForecastIcon />
    </article>
  );
};

export default DetailedDayForecast;
