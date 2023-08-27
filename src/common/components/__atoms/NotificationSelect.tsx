"use client";
import { type } from "os";
import React, { useState, useRef, useEffect } from "react";
// import ArrowDown from "../icons/arrow-down-icon";
interface NotificationSelectProps {
  options: string[];
  defaultValue: string;
  setFieldValue?: any;
  name?: string;
  className: string;
  type: string;
}
const NotificationSelect: React.FC<NotificationSelectProps> = ({
  options,
  defaultValue,
  setFieldValue,
  name,
  className,
  type,
}) => {
  const [select, setSelect] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node) &&
        optionsRef.current &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        setSelect(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div
        className={`w-full  relative ${
          select ? "overflow-visible" : "overflow-hidden"
        }`}
      >
        <div
          className={
            "flex justify-between items-center cursor-pointer border-black border-[1px] xxl:rounded-xl md:rounded-[10px] md:py-2 md:pl-2 w-1/2" +
            className
          }
          onClick={() => setSelect(!select)}
          ref={selectRef}
        >
          {type === "city" && <>{selected === "" ? defaultValue : selected}</>}
          {/* <ArrowDown /> */}
        </div>
        <div
          className={`w-1/2 ${
            type === "gender" ? "h-auto" : "h-[162px]"
          } rounded-xl bg-[#F3F3F3] absolute z-10 translate-y-2 py-[10px] pr-2 overflow-y-scroll${
            select ? "translate-y-0 visible" : "translate-y-[-100%] invisible"
          } shadow-lg  border-black border-[1px]`}
          ref={optionsRef}
        >
          <div className="w-full h-full overflow-y-scroll scrollbar scrollbar-thumb-[#B0B0B0] scrollbar-w-[4px] scrollbar-thumb-rounded-[20px]">
            {options.map((el, index) => {
              return (
                <option
                  onClick={() => {
                    setSelect(false);
                    setSelected(el);
                    if (type === "city") {
                      setFieldValue(name, index + 1);
                    }
                  }}
                  value={index + 1}
                  key={index + 1}
                  className="px-[16px] text-[black] hover:bg-[#e7e5e5] rounded-sm cursor-pointer"
                >
                  {el}
                </option>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSelect;
