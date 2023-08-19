import SunriseIcon from "@/common/icons/sunriseIcon";
import WindChartIcon from "@/common/icons/windChartIcon";
import React from "react";

interface HighlightUpperProps {
  dataType: string;
}

interface Props {
  props: HighlightUpperProps;
  type: string;
}

const HighlightUpper = ({ props, type }: Props) => {
  return (
    <article className="rounded-[18px] bg-[#ffffff4d] p-5 flex-1 flex flex-col justify-between">
      <h3 className="text-[#000000CC] text-lg">{props.dataType}</h3>
      {type === "windStatus" ? (
        <>
          <WindChartIcon width={0} height={117} className="w-full" />
          <div className="w-full flex justify-between items-end">
            <h3
              className={`text-[40px] font-medium flex items-end gap-1
              leading-10`}
            >
              5.10
              <span className="text-base text-[#00000099]">km/h</span>
            </h3>
            <p className="text-base text-[#00000099]">6:30 AM</p>
          </div>
        </>
      ) : type === "uvIndex" ? (
        <>
          <WindChartIcon width={0} height={117} className="w-full" />
          <div className="w-full flex items-center justify-center">
            <h3
              className={`text-[40px] font-medium flex items-end gap-1
              leading-10`}
            >
              4.3
              <span className="text-base text-[#00000099]">UV</span>
            </h3>
          </div>
        </>
      ) : (
        <>
          <SunriseIcon width={0} height={135} className="w-full" />
          <div className="w-full flex items-center justify-between">
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-sm">Sunrise</p>
              <p className="text-base text-[#00000099]">5:30 AM</p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#FAC32D] text-sm">Sunset</p>
              <p className="text-base text-[#00000099]">6:40 AM</p>
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default HighlightUpper;
