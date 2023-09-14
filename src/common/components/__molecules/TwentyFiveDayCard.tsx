import SunIcon from "@/common/icons/sunIcon";
import { title } from "process";
import React from "react";

interface TwentyFiveDayCardProps {
  date: string;
  icon: React.ReactNode;
  tempMax: string;
  tempMin: string;
}

const TwentyFiveDayCard = ({
  date,
  icon,
  tempMax,
  tempMin,
}: TwentyFiveDayCardProps) => {
  return (
    <div className=" justify-between flex flex-col items-center bg-[#0000004D] rounded-[18px] w-[164px] h-[154px] md:h-[144px] md:w-[135px] px-[20px] py-[20px] xxl:px-[20px] xxl:py-[13px] xxl:w-[174px] xxl:h-[158px] md:px-2 md:py-3 ">
      <p className="text-[#FFFFFFB2] text-xs flex flex-col  text-center">
        {date.split("\n")[0]}
        <span>{date.split("\n")[1]}</span>
      </p>
      <SunIcon
        width={0}
        height={0}
        className="xxl:w-[76px] xxl:h-[76px]  md:w-[60px] md:h-[60px] w-[76px] h-[76px] "
      />

      <div className="xxl:text-[22px] md:text-[18px] flex gap-[15px] text-[22px]">
        <p>
          {tempMax}
          <sup>o</sup>
        </p>
        <p className="text-[#FFFFFFB2]">
          {tempMin}
          <sup>o</sup>
        </p>
      </div>
    </div>
  );
};

export default TwentyFiveDayCard;
