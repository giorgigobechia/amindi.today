import { useGlobalContext } from "@/common/context/store";
import { MoonPhasesImg } from "@/common/icons/moonPhases/moonPhases";
import MoonWrapper from "@/common/icons/moonWrapper";
import SunriseIcon from "@/common/icons/sunriseIcon";
import UvIndexIcon from "@/common/icons/uvIndexIcon";
import WindChartIcon from "@/common/icons/windChartIcon";
import TEXTS from "@/languages/Languages";
import React from "react";

interface Props {
  type: string;
  dataType?: string;
  className: string;
  windSpeed?: number;
  sunRise?: string;
  sunSet?: string;
  moonPhase?: string;
}

const HighlightUpperMobile = ({
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
        "rounded-[18px]  px-[20px] py-[13px] w-full bg-[#ffffff4d] dark:bg-[#0000004D] flex-1 flex flex-col justify-between" +
        className
      }
    >
      <h3 className="text-[#000000CC] dark:text-[#FFFFFF99] text-[12px] text-center">
        {dataType}
      </h3>
      {type === "moonPhase" ? (
        <>
          <div className="flex justify-center relative">
            <div className="absolute w-[30px] h-[30px] top-[-10px] radial-gradient -z-10 rounded-full"></div>
            <MoonWrapper width={90} height={90} className="absolute bottom-6" />
            <MoonPhasesImg iconName={moonPhase} IconSize={80} />
          </div>
          <div className="w-full flex justify-center items-end ">
            <h3
              className={` flex items-end 
                text-[10px] dark:text-[#ffffff99] `}
            >
              {moonPhase}
            </h3>
          </div>
        </>
      ) : type === "uvIndex" ? (
        <div className="flex flex-col gap-1">
          <UvIndexIcon
            width={0}
            height={115}
            className="w-full flex-1 max-h-[82px]"
          />
          <div className="w-full flex items-end justify-center">
            <h3 className={`text-[24px] font-medium flex items-end gap-1`}>
              4.3
              <span className="text-sm text-[#00000099] dark:text-[#FFFFFF99]">
                UV
              </span>
            </h3>
          </div>
        </div>
      ) : (
        <>
          <SunriseIcon
            width={0}
            height={0}
            className="w-full flex-1 max-h-[82px]"
          />
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px] xxl:text-lg ">
                {TEXTS[language]?.sunrise}
              </p>
              <p className=" text-[10px] text-center xxl:text-base text-[#00000099] dark:text-[#FFFFFF99]">
                {sunRise}
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D]  text-xs sm:text-[12px]  xxl:text-lg ">
                {TEXTS[language]?.sunset}
              </p>
              <p className="text-[10px] text-center xxl:text-base text-[#00000099] dark:text-[#FFFFFF99]">
                {sunSet}
              </p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default HighlightUpperMobile;
