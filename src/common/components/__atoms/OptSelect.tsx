import { useGlobalContext } from "@/common/context/store";
import React, { useState } from "react";

const OptSelect = ({ activeData, setActiveData }: any) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [notActiveData, setNotActiveData] = useState("7 დღე");
  const { language } = useGlobalContext();
  return (
    <div
      className={`relative bg-[#70707033] dark:bg-[#355a7145] ${
        openOptions ? "rounded-t-[17px]" : "rounded-[17px]"
      }  `}
      onClick={() => setOpenOptions(!openOptions)}
    >
      <div className=" w-[90px]  flex items-center h-full px-[14px] cursor-pointer relative">
        <p className="md:text-sm">{activeData}</p>
      </div>
      {openOptions && (
        <div
          className=" w-[90px] flex items-center rounded-b-[17px] h-full px-[14px] cursor-pointer absolute bg-[#70707033] dark:bg-[#355a7145]"
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
