import { useGlobalContext } from "@/common/context/store";
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
  dataType: string;
  className: string;
  windSpeed?: number;
  sunRise?: string;
  sunSet?: string;
}

const HighlightUpper = ({
  type,
  className,
  dataType,
  windSpeed,
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
      <h3 className="text-[#000000CC] text-base sm:text-lg md:text-[14px] lg:text-[14px]  xl:text-[16px] xxl:text-[18px] dark:text-[#FFFFFF99]">
        {dataType}
      </h3>
      {type === "windStatus" ? (
        <>
          <WindChartIcon width={0} height={117} className="w-full flex-1" />
          <div className="w-full flex justify-between items-end">
            <h3
              className={`text-[24px] font-medium flex items-end gap-1
              leading-8 sm:text-[32px] md:text-[26px] lg:text-[26px] xl:text-[28px] xxl:text-[40px] `}
            >
              {windSpeed}
              <span className="text-sm text-[#00000099] dark:text-[#FFFFFF99]">
                {TEXTS[language]?.kmh}
              </span>
            </h3>
            <p className="text-sm text-[#00000099] dark:text-[#FFFFFF99]">
              6:30 AM
            </p>
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
