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
    <section className="p-8 rounded-[34px] bg-[#cea9a927] w-[30%] relative overflow-hidden">
      <div
        className="absolute w-full h-full -z-10 "
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div className="absolute w-full h-full -z-20">
        <PinkGradient width={300} height={283} className="absolute left-10" />
        <GrayGradient
          width={308}
          height={300}
          className="absolute right-6 top-[-50px]"
        />
        <GreenGradient
          width={478}
          height={360}
          className="absolute bottom-10 left-0"
        />
      </div>
      <div className="flex w-full justify-between mt-4 ">
        <h1 className="text-[40px]">Today</h1>
        <button className="rounded-full p-3 bg-[#ffffff4d] cursor-pointer">
          <SearchIcon width={36} height={36} />
        </button>
      </div>
      <div className=" py-[3vh] flex w-full items-center border-b-2 border-b-gray-400 gap-[4%]">
        <SunIcon width={0} height={0} className="w-[40%] h-[20vh]" />
        <div className="w-[40%]">
          <h3 className="text-[54px] leading-tight">
            +18<sup>o</sup>
          </h3>
          <p className="">Sunny, clear skies, swirling winds </p>
        </div>
      </div>
      <div className="py-[2vh] flex flex-col gap-2">
        <p className="flex items-center gap-1">
          <LocationIcon width={21} height={21} /> Tbilisi , Georgia
        </p>
        <p className="flex items-center gap-1">
          <EmptyCalendarIcon width={21} height={21} /> Monday, September 11
          <span className="pl-2">
            {" "}
            <b>6:30AM</b>
          </span>
        </p>
      </div>
    </section>
  );
};

export default WeatherToday;
