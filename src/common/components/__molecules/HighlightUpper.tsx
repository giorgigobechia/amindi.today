import { useGlobalContext } from "@/common/context/store";
import { MoonPhasesImg } from "@/common/icons/moonPhases/moonPhases";
import MoonWrapper from "@/common/icons/moonWrapper";
import SunriseIcon from "@/common/icons/sunriseIcon";
import UvIndexIcon from "@/common/icons/uvIndexIcon";
import WindChartIcon from "@/common/icons/windChartIcon";
import TEXTS from "@/languages/Languages";
import React from "react";

interface HighlightUpperProps {
  dataType: string;
}

interface Props {
  type: string;
  dataType?: string;
  className: string;
  windSpeed?: number;
  sunRise?: string;
  sunSet?: string;
  moonPhase?: string;
}

const HighlightUpper = ({
  type,
  className,
  dataType,
  moonPhase,
  sunRise,
  sunSet,
}: Props) => {
  const { language } = useGlobalContext();

  return (
    <article
      className={
        "rounded-[18px] bg-[#ffffff4d] dark:bg-[#0000004D] flex-1 flex flex-col justify-between sm:p-4 md:3 xxl:p-5 " +
        className
      }
    >
      <h3 className="text-[#000000CC] flex text-base sm:text-lg md:text-[14px] lg:text-[14px]  xl:text-[16px] xxl:text-[18px] dark:text-[#FFFFFF99]">
        {dataType}
      </h3>
      {type === "moonPhase" ? (
        <>
          <div className="flex justify-center relative">
            <div className="absolute w-[100px] h-[100px] top-[-10px] radial-gradient -z-10 rounded-full"></div>
            <MoonWrapper
              width={165}
              height={165}
              className="absolute bottom-6"
            />
            <MoonPhasesImg iconName={moonPhase} className="" />
          </div>
          <div className="w-full flex justify-center items-end ">
            <h3
              className={` flex items-end gap-1
              leading-8  text-base xxl:text-[20px] dark:text-[#ffffff99] `}
            >
              {moonPhase}
            </h3>
          </div>
        </>
      ) : type === "uvIndex" ? (
        <>
          <UvIndexIcon width={0} height={117} className="w-full flex-1" />
          <div className="w-full flex items-center justify-center">
            <h3
              className={`text-[24px] font-medium flex items-end gap-1
              leading-8 sm:text-[32px] md:text-[26px] lg:text-[26px] xl:text-[28px] xxl:text-[40px] `}
            >
              4.3
              <span className="text-sm text-[#00000099] dark:text-[#FFFFFF99]">
                UV
              </span>
            </h3>
          </div>
        </>
      ) : (
        <>
          <SunriseIcon width={0} height={0} className="w-full flex-1" />
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px] xxl:text-lg ">
                {TEXTS[language]?.sunrise}
              </p>
              <p className=" sm:text-sm xxl:text-base text-[#00000099] dark:text-[#FFFFFF99]">
                {sunRise}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px]  xxl:text-lg ">
                {TEXTS[language]?.sunset}
              </p>
              <p className="sm:text-sm xxl:text-base text-[#00000099] dark:text-[#FFFFFF99]">
                {sunSet}
              </p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default HighlightUpper;
