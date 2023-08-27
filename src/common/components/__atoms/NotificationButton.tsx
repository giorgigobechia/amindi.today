import React from "react";

interface ButtonProps {
  type: "submit" | "button" | "reset" | undefined;
  title: string;
}

const NotificationButton = ({ type, title }: ButtonProps) => {
  return (
    <button
      type={type}
      className="w-[40%] xxl:py-[10px] md:py-2 bg-[#2E386B] text-white xxl:rounded-[14px] md:rounded-[12px] mt-3 xxl:text-[22px] md:text-base"
    >
      {title}
    </button>
  );
};

export default NotificationButton;
