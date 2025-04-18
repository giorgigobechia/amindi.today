import React from "react";
import { IconProps } from "./IconTypes";

const LocationIcon = ({ width, height, stroke }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 2.1875C6.39888 2.1875 3.0625 5.52388 3.0625 9.625C3.0625 13.9851 7.11288 16.6608 9.793 18.431L10.2568 18.739C10.3303 18.788 10.4151 18.8125 10.4991 18.8125C10.5831 18.8125 10.668 18.788 10.7415 18.739L11.2052 18.431C13.8854 16.6608 17.9358 13.9851 17.9358 9.625C17.9375 5.52388 14.6011 2.1875 10.5 2.1875ZM10.5 11.8125C9.29163 11.8125 8.3125 10.8334 8.3125 9.625C8.3125 8.41663 9.29163 7.4375 10.5 7.4375C11.7084 7.4375 12.6875 8.41663 12.6875 9.625C12.6875 10.8334 11.7084 11.8125 10.5 11.8125Z"
        fill={stroke}
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default LocationIcon;
