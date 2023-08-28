import React from "react";
import SingleDayForecast from "../__molecules/SingleDayForecast";
import CloudySun from "@/common/icons/cloudySun";
import DetailedDayForecast from "../__molecules/DetailedDayForecast";
import LightningIcon from "@/common/icons/lightningIcon";
import WindIcon from "@/common/icons/windIcon";

const DaysForecast = () => {
  return (
    <section className="flex flex-col gap-3 xxl:rounded-[34px] md:rounded-[26px] w-[30%] h-full relative">
      <div className="w-full flex justify-between items-center h-[8%]">
        <h2 className="xxl:text-[20px] md:text-lg">7 days Forecast</h2>
        <div className="w-[80px] bg-[#70707033] dark:bg-[#355a7145] flex items-center rounded-[17px] h-full px-[14px]">
          <p className="md:text-sm">7 day</p>
        </div>
      </div>
      <div className="w-full bg-[#cea9a927] dark:bg-[#355a7145] rounded-[34px] p-[20px_15px_15px] relative h-[90%] flex flex-col justify-between">
        <div className="flex flex-col gap-2 scroll pr-1 h-[100px] xl:h-[200px]">
          <SingleDayForecast
            Icon={<CloudySun width={38} height={38} />}
            degree={"+24"}
            date={"12 september"}
            day="Tuesday"
          />
          <SingleDayForecast
            Icon={<CloudySun width={38} height={38} />}
            degree={"+24"}
            date={"12 september"}
            day="Tuesday"
          />
          <SingleDayForecast
            Icon={<CloudySun width={38} height={38} />}
            degree={"+24"}
            date={"12 september"}
            day="Tuesday"
          />
        </div>
        <DetailedDayForecast />
      </div>
    </section>
  );
};

export default DaysForecast;
