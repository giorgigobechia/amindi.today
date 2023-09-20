"use client";
import { useGlobalContext } from "@/common/context/store";
import CalendarIcon from "@/common/icons/calendarIcon";
import EmptyCalendarIcon from "@/common/icons/emptyCalendarIcon";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import LocationIcon from "@/common/icons/locationIcon";
import PinkGradient from "@/common/icons/pinkGradient";
import SearchIcon from "@/common/icons/searchIcon";
import SunIcon from "@/common/icons/sunIcon";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

const WeatherTodayMobile = () => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();

  return (
    <section className="md:p-4 pt-[70px] pb-[32px] flex flex-col justify-between mx-auto items-center">
      <div className="flex w-full items-center justify-center  gap-[5px]">
        <SunIcon width={0} height={0} className="w-[48px] h-[48px]" />
        <p className="text-[40px] leading-normal text-white">Tbilisi</p>
      </div>
      <h3 className="text-[80px] font-[300] leading-normal">
        +18<sup>o</sup>
      </h3>
      <div className="max-w-[168px] w-full">
        <p className="text-[#FFFFFFB2] text-[14px] font-[400] leading-normal text-center">
          Sunny, clear skies, swirling winds
        </p>
      </div>
    </section>
  );
};

export default WeatherTodayMobile;
