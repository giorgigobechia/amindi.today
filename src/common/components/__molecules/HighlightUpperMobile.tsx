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
  props: HighlightUpperProps;
  type: string;
  dataType: string;
  className: string;
}

const HighlightUpperMobile = ({ props, type, className, dataType }: Props) => {
  const { language } = useGlobalContext();

  return (
    <article
      className={
        "rounded-[18px] gap-3 px-[20px] py-[25px] min-h-[200px] h-full w-full bg-[#ffffff4d] dark:bg-[#0000004D] flex-1 flex flex-col justify-between" +
        className
      }
    >
      <h3 className="text-[#000000CC] dark:text-[#FFFFFF99] text-[12px]">
        {dataType}
      </h3>
      {type === "windStatus" ? (
        <div className="flex flex-col">
          <WindChartIcon
            width={0}
            height={105}
            className="w-full align-middle"
          />
          <div className="w-full flex justify-center items-end">
            <h3
              className={`text-[25px] font-medium flex justify-center items-end gap-1`}
            >
              5.10
              <span className="text-sm text-[#00000099] dark:text-[#FFFFFF99]">
                {TEXTS[language]?.kmh}
              </span>
            </h3>
          </div>
        </div>
      ) : type === "uvIndex" ? (
        <div className="flex flex-col gap-3">
          <UvIndexIcon width={0} height={115} className="w-full flex-1" />
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
          <SunriseIcon width={0} height={0} className="w-full flex-1" />
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px] xxl:text-lg ">
                {TEXTS[language]?.sunrise}
              </p>
              <p className=" sm:text-sm xxl:text-base text-[#00000099] dark:text-[#FFFFFF99]">
                5:30 AM
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px]  xxl:text-lg ">
                {TEXTS[language]?.sunset}
              </p>
              <p className="sm:text-sm xxl:text-base text-[#00000099] dark:text-[#FFFFFF99]">
                6:40 AM
              </p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default HighlightUpperMobile;
