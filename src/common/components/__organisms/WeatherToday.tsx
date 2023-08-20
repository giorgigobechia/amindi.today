import CalendarIcon from "@/common/icons/calendarIcon";
import EmptyCalendarIcon from "@/common/icons/emptyCalendarIcon";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import LocationIcon from "@/common/icons/locationIcon";
import PinkGradient from "@/common/icons/pinkGradient";
import SearchIcon from "@/common/icons/searchIcon";
import SunIcon from "@/common/icons/sunIcon";
import React from "react";

const WeatherToday = () => {
  return (
    <section className="md:p-4 xxl:p-7 flex flex-col justify-between  xxl:rounded-[34px] md:rounded-[26px] bg-[#cea9a927] w-[30%] relative overflow-hidden">
      <div
        className="absolute w-full h-full -z-10 "
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div className="absolute w-full h-full -z-20">
        <PinkGradient
          width={300}
          height={283}
          className="absolute xxl:left-10 "
        />
        <GrayGradient
          width={308}
          height={300}
          className="absolute xxl:right-6 xxl:top-[-50px] md:right-2 md:top-[-80px]"
        />
        <GreenGradient
          width={478}
          height={360}
          className="absolute xxl:bottom-10 xxl:left-0 md:bottom-[-50px] md:left-[-30px]"
        />
      </div>
      <div className="flex w-full justify-between mt-4 ">
        <h1 className="xxl:text-[40px] md:text-[30px]">Today</h1>
        <button className="rounded-full xxl:p-2 md:p-2 bg-[#ffffff4d] cursor-pointer">
          <SearchIcon
            width={0}
            height={0}
            className="md:w-[28px] md:h-[28px] xxl:w-[36px] xxl:h-[36px]"
          />
        </button>
      </div>
      <div className=" xxl:py-[3vh] flex w-full items-center  gap-[4%]">
        <SunIcon width={0} height={0} className="w-[40%] h-[18vh]" />
        <div className="w-[40%]">
          <h3 className="xxl:text-[54px] md:text-[50px]  leading-tight">
            +18<sup>o</sup>
          </h3>
          <p className="xxl:text-base md:text-sm">
            Sunny, clear skies, swirling winds{" "}
          </p>
        </div>
      </div>
      <div className="py-[2vh] flex flex-col gap-2 border-t-2 border-t-gray-400">
        <p className="flex items-center gap-1 xxl:text-base md:text-sm">
          <LocationIcon width={21} height={21} /> Tbilisi , Georgia
        </p>
        <p className="flex items-center gap-1 xxl:text-base md:text-sm">
          <EmptyCalendarIcon width={21} height={21} /> Monday, September 11
          <span className="pl-2">
            {" "}
            <b className="xxl:text-base md:text-sm">6:30AM</b>
          </span>
        </p>
      </div>
    </section>
  );
};

export default WeatherToday;
