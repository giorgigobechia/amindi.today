import React from "react";
import { IconProps } from "./IconTypes";

const ArrowDown = ({ width, height, className, fill }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 15C11.744 15 11.488 14.9021 11.293 14.7071L7.29301 10.7071C6.90201 10.3161 6.90201 9.68401 7.29301 9.29301C7.68401 8.90201 8.31607 8.90201 8.70707 9.29301L12 12.586L15.293 9.29301C15.684 8.90201 16.3161 8.90201 16.7071 9.29301C17.0981 9.68401 17.0981 10.3161 16.7071 10.7071L12.7071 14.7071C12.5121 14.9021 12.256 15 12 15Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowDown;
