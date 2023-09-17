"use client";
import React from "react";
import SingleDayForecast from "../__molecules/SingleDayForecast";
import CloudySun from "@/common/icons/cloudySun";
import { useGlobalContext } from "@/common/context/store";

const DaysForeCastMobile = () => {
  const { language } = useGlobalContext();
  return (
    <section className="flex flex-col gap-3 xxl:rounded-[34px] md:rounded-[26px] max-w-[378px] w-full relative">
      <div className="w-full bg-[#0000004D] rounded-[34px] px-[23px] py-[19px] relative h-[92%] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <p className="text-[14px] font-normal text-[white]">
            7 days Forecast
          </p>
          <div className="w-[99px] flex items-center bg-[#70707033] rounded-[17px] h-[34px] px-[14px]">
            <p className="md:text-sm">7 day</p>
          </div>
        </div>
        <div className="flex flex-col gap-[31px] pr-1 min-h-[411px] py-[49px]">
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
          <SingleDayForecast
            Icon={<CloudySun width={38} height={38} />}
            degree={"+24"}
            date={"12 september"}
            day="Tuesday"
          />
        </div>
      </div>
    </section>
  );
};

export default DaysForeCastMobile;
