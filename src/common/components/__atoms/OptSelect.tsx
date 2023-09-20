import { useGlobalContext } from "@/common/context/store";
import ArrowDown from "@/common/icons/arrowDown";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const OptSelect = ({ activeData, setActiveData }: any) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [notActiveData, setNotActiveData] = useState("7 დღე");
  const { resolvedTheme } = useTheme();

  const { language } = useGlobalContext();
  return (
    <div
      className={`relative bg-[#70707033] dark:bg-[#70707033] py-[2px] xxl:py-2 ${
        openOptions ? "rounded-t-[17px]" : "rounded-[17px]"
      }  `}
      onClick={() => setOpenOptions(!openOptions)}
    >
      <div className=" w-[100px] flex items-center h-full justify-center  cursor-pointer relative gap-[4px] ">
        <p className="md:text-sm pl-1">{activeData}</p>
        <ArrowDown
          width={24}
          height={24}
          className={` duration-300 ${openOptions && "rotate-180 "} `}
          fill={resolvedTheme === "light" ? "black" : "white"}
        />
      </div>
      {openOptions && (
        <div
          className=" w-[100px] h-full  flex items-center justify-center rounded-b-[17px] z-50   cursor-pointer absolute bg-[#70707033] dark:bg-[#70707033]"
          onClick={() => {
            setNotActiveData(activeData);
            setActiveData(notActiveData);
          }}
        >
          <p className="md:text-sm">{notActiveData}</p>
        </div>
      )}
    </div>
  );
};

export default OptSelect;
