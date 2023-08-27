import SunriseIcon from "@/common/icons/sunriseIcon";
import WindChartIcon from "@/common/icons/windChartIcon";
import React from "react";

interface HighlightUpperProps {
  dataType: string;
}

interface Props {
  props: HighlightUpperProps;
  type: string;
  className: string;
}

const HighlightUpper = ({ props, type, className }: Props) => {
  return (
    <article
      className={
        "rounded-[18px] bg-[#ffffff4d] flex-1 flex flex-col justify-between sm:p-4 md:3 xxl:p-5 " +
        className
      }
    >
      <h3 className="text-[#000000CC] text-base sm:text-lg md:text-[14px] lg:text-[14px]  xl:text-[16px] xxl:text-[18px]">
        {props.dataType}
      </h3>
      {type === "windStatus" ? (
        <>
          <WindChartIcon width={0} height={117} className="w-full" />
          <div className="w-full flex justify-between items-end">
            <h3
              className={`text-[24px] font-medium flex items-end gap-1
              leading-8 sm:text-[32px] md:text-[26px] lg:text-[26px] xl:text-[28px] xxl:text-[40px]`}
            >
              5.10
              <span className="text-sm text-[#00000099]">km/h</span>
            </h3>
            <p className="text-sm text-[#00000099]">6:30 AM</p>
          </div>
        </>
      ) : type === "uvIndex" ? (
        <>
          <WindChartIcon width={0} height={117} className="w-full" />
          <div className="w-full flex items-center justify-center">
            <h3
              className={`text-[24px] font-medium flex items-end gap-1
              leading-8 sm:text-[32px] md:text-[26px] lg:text-[26px] xl:text-[28px] xxl:text-[40px]`}
            >
              4.3
              <span className="text-sm text-[#00000099]">UV</span>
            </h3>
          </div>
        </>
      ) : (
        <>
          <SunriseIcon width={0} height={0} className="w-full sm:h-[105px] xxl:h-[135px]" />
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px] xxl:text-lg">Sunrise</p>
              <p className=" sm:text-sm xxl:text-base text-[#00000099]">5:30 AM</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-xs sm:text-[12px]  xxl:text-lg">Sunset</p>
              <p className="sm:text-sm xxl:text-base text-[#00000099]">6:40 AM</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default HighlightUpper;
