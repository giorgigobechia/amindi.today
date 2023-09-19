import { useGlobalContext } from "@/common/context/store";
import React, { useState } from "react";

const OptSelectMobile = ({ activeData, setActiveData }: any) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [notActiveData, setNotActiveData] = useState("7 დღე");
  const { language } = useGlobalContext();
  return (
    <div
      className={`relative bg-[#70707033] dark:bg-[#70707033] ${
        openOptions ? "rounded-t-[17px]" : "rounded-[17px]"
      }  `}
      onClick={() => setOpenOptions(!openOptions)}
    >
      <div className="w-[90px]  flex items-center h-[30px] px-[14px] cursor-pointer relative">
        <p className="md:text-sm text-[13px]">{activeData}</p>
      </div>
      {openOptions && (
        <div
          className=" w-[90px] flex items-center rounded-b-[17px] h-full px-[14px] cursor-pointer absolute bg-[#70707033] dark:bg-[#70707033]"
          onClick={() => {
            setNotActiveData(activeData);
            setActiveData(notActiveData);
          }}
        >
          <p className="md:text-sm text-[14px]">{notActiveData}</p>
        </div>
      )}
    </div>
  );
};

export default OptSelectMobile;
