"use client";
import { useGlobalContext } from "@/common/context/store";
import DropIcon from "@/common/icons/dropIcon";
import EyeIcon from "@/common/icons/eyeIcon";
import TempIcon from "@/common/icons/tempIcon";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import React from "react";

interface HighlightLowerProps {
  dataType: string;
  number: number;
  title: string;
}

interface Props {
  props: HighlightLowerProps;
  type: string;
  dataType: string;
  className: string;
}

const HighLightLowerMobile = ({ props, type, className, dataType }: Props) => {
  const { resolvedTheme } = useTheme();
  const { language } = useGlobalContext();

  return (
    <article
      className={
        "rounded-[18px] bg-[#ffffff4d] dark:bg-[#0000004D] flex justify-between" +
        className
      }
    >
      <div className="flex flex-col gap-[30px]">
        <h6 className="text-[#000000CC] text-sm dark:text-[#FFFFFF99]">
          {dataType}
        </h6>
        <div
          className={`${
            type === "feelsLike" ? "flex gap-1" : ""
          } flex flex-col gap-[30px] h-full justify-center`}
        >
          <p
            className={`font-medium flex ${
              type === "feelsLike" ? "" : "items-end"
            } leading-10 text-[50px]`}
          >
            {props.number}
            {type === "humidity" ? (
              <span className="text-sm dark:text-[#FFFFFF99]">%</span>
            ) : type === "visibility" ? (
              <span className="text-sm dark:text-[#FFFFFF99]">
                {TEXTS[language]?.km}
              </span>
            ) : (
              <span className="md:text-sm dark:text-[#FFFFFF99]">o</span>
            )}
          </p>
          <p className="text-xs text-[#00000099] dark:text-[#FFFFFF99]">
            {props.title}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {type === "feelsLike" ? (
          <TempIcon
            width={15}
            height={29}
            stroke={resolvedTheme === "light" ? "black" : "white"}
          />
        ) : (
          ""
        )}
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
          <div></div>
        )}
      </div>
    </article>
  );
};

export default HighLightLowerMobile;
