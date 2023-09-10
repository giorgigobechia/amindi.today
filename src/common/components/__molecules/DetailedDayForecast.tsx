"use client";
import { useGlobalContext } from "@/common/context/store";
import CloudySun from "@/common/icons/cloudySun";
import DetailedDayForecastIcon from "@/common/icons/deatiledDayForecastIcon";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import React from "react";

const DetailedDayForecast = () => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();
  return (
    <article
      className="w-full md:h-[40%] xxl:h-[30%] flex items-center justify-between"
      style={{
        background:
          resolvedTheme === "light"
            ? "rgba(255, 255, 255, 0.50)"
            : "linear-gradient(290deg, rgba(21, 23, 26, 0.99) 60.04%, rgba(67, 69, 71, 0.19) 69.38%, rgba(116, 117, 119, 0.38) 83.13%, rgba(255, 255, 255, 0.34) 107.2%, rgba(21, 23, 26, 0.30) 111.12%)",
        borderRadius: "18px",
        padding: "18px",
      }}
    >
      <div className="flex items-center gap-3">
        <CloudySun width={52} height={53} />
        <div className="h-full text-[14px] flex flex-col justify-center text-[#000000b2]">
          <p className="dark:text-[#FFFFFF99]"> {TEXTS[language]?.tomorrow}</p>
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
