import React, { useState } from "react";

interface CustomRadioProps {
  id: string;
  label: string;
}

const CustomCheckbox = ({ id, label }: CustomRadioProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleRadioClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer w-fit"
      onClick={handleRadioClick}
    >
      <div
        id={id}
        className={`xxl:w-5 xxl:h-5 md:w-4 md:h-4 border-[1px] xxl:text-xl md:text-lg border-black rounded-[4px] cursor-pointer ${
          isChecked ? "bg-black" : ""
        }`}
      ></div>
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
