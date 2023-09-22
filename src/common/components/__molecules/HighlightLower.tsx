"use client";
import { useGlobalContext } from "@/common/context/store";
import DropIcon from "@/common/icons/dropIcon";
import EyeIcon from "@/common/icons/eyeIcon";
import TempIcon from "@/common/icons/tempIcon";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import React from "react";

interface Props {
  type: string;
  dataType: string;
  className: string;
  number: string;
  title: string;
}

const HighlightLower = ({
  type,
  className,
  dataType,
  title,
  number,
}: Props) => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();

  return (
    <article
      className={
        "rounded-[18px] bg-[#ffffff4d] dark:bg-[#0000004D] sm:p-4 md:p-3  xxl:p-5 flex justify-between " +
        className
      }
    >
      <div className="flex flex-col md:gap-2 xxl:gap-5">
        <h6 className="text-[#000000CC] text-sm dark:text-[#FFFFFF99]">
          {dataType}
        </h6>
        <div
          className={`${type === "feelsLike" ? "flex items-center gap-1" : ""}`}
        >
          {type === "feelsLike" ? (
            <TempIcon
              width={15}
              height={29}
              stroke={resolvedTheme === "light" ? "black" : "white"}
            />
          ) : (
            ""
          )}
          <p
            className={`sm:text-[32px] md:text-[26px] lg:text-[26px] xl:text-[28px] xxl:text-[40px] font-medium flex ${
              type === "feelsLike" ? "" : "items-end"
            } leading-10`}
          >
            {number}{" "}
            {type === "humidity" ? (
              <span className="text-sm dark:text-[#FFFFFF99]">%</span>
            ) : type === "visibility" ? (
              <span className="text-sm dark:text-[#FFFFFF99]">
                {TEXTS[language]?.km}
              </span>
            ) : (
              <span className="md:text-sm dark:text-[#FFFFFF99]">°</span>
            )}
          </p>
        </div>
      </div>
      <div className="md:w-[50%] lg:w-[50%] xxl:w-[38%]  md:pt-2  xxl:pt-4 flex flex-col justify-between">
        {type === "humidity" ? (
          <DropIcon
            width={27}
            height={27}
            stroke={resolvedTheme === "light" ? "black" : "white"}
          />
        ) : type === "visibility" ? (
          <EyeIcon
            width={27}
            height={27}
            stroke={resolvedTheme === "light" ? "black" : "white"}
          />
        ) : (
          <div className="w-[27px] h-[27px]"></div>
        )}

        <p className="text-xs text-[#00000099] dark:text-[#FFFFFF99]">
          {title}
        </p>
      </div>
    </article>
  );
};

export default HighlightLower;
