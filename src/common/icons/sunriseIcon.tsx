"use client";
import React from "react";
import { IconProps } from "./IconTypes";
import { useTheme } from "next-themes";

const SunriseIcon = ({ width, height, className }: IconProps) => {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 352 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        y1="134"
        x2="352"
        y2="134"
        stroke={resolvedTheme === "light" ? "black" : "white"}
        strokeOpacity="0.2"
        strokeWidth="2"
      />
      <path
        d="M50 135C51.9343 93 79.9422 9 176.5 9C273.058 9 301.066 93 303 135"
        stroke={resolvedTheme === "light" ? "black" : "white"}
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      <path
        d="M50 135C51.9343 93 79.9422 9 176.5 9"
        stroke="#FAC32D"
        strokeWidth="2"
        strokeDasharray="5 5"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M175.906 2.96875V1.1875H177.094V2.96875H175.906ZM179.251 3.54695L180.142 2.00434L181.17 2.59809L180.28 4.1407L179.251 3.54695ZM176.5 13.6562C178.795 13.6562 180.656 11.7954 180.656 9.5C180.656 7.20457 178.795 5.34375 176.5 5.34375C174.205 5.34375 172.344 7.20457 172.344 9.5C172.344 11.7954 174.205 13.6562 176.5 13.6562ZM176.5 14.8438C179.451 14.8438 181.844 12.4513 181.844 9.5C181.844 6.54873 179.451 4.15625 176.5 4.15625C173.549 4.15625 171.156 6.54873 171.156 9.5C171.156 12.4513 173.549 14.8438 176.5 14.8438ZM183.031 8.90625H184.812V10.0938H183.031V8.90625ZM183.402 4.82955L181.859 5.72017L182.453 6.74858L183.996 5.85795L183.402 4.82955ZM171.83 2.59809L172.72 4.1407L173.749 3.54695L172.858 2.00434L171.83 2.59809ZM170.547 6.74858L169.004 5.85795L169.598 4.82955L171.141 5.72017L170.547 6.74858ZM175.906 16.0312V17.8125H177.094V16.0312H175.906ZM169.969 8.90625H168.188V10.0938H169.969V8.90625ZM169.004 13.142L170.547 12.2514L171.141 13.2798L169.598 14.1705L169.004 13.142ZM172.72 14.8594L171.83 16.402L172.858 16.9958L173.749 15.4532L172.72 14.8594ZM180.142 16.9958L179.251 15.4532L180.28 14.8594L181.17 16.402L180.142 16.9958ZM181.859 13.2798L183.402 14.1705L183.996 13.142L182.453 12.2514L181.859 13.2798Z"
        fill="#FAC32D"
      />
      <circle cx="176.5" cy="9.5" r="4.15625" fill="#DFAC20" />
      <line
        x1="39"
        y1="133.5"
        x2="61"
        y2="133.5"
        stroke="#FAC32D"
        strokeWidth="3"
      />
      <line
        x1="292"
        y1="133.5"
        x2="314"
        y2="133.5"
        stroke="#FAC32D"
        strokeWidth="3"
      />
      <path
        d="M176 10.0126C81.5247 8.81752 52.6353 92.8396 50 135H176V10.0126Z"
        fill="url(#paint0_linear_63_3598)"
        fillOpacity="0.4"
      />
      <defs>
        <linearGradient
          id="paint0_linear_63_3598"
          x1="113"
          y1="10"
          x2="113"
          y2="135"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAC32D" />
          <stop offset="0.479167" stopColor="#FAC32D" stopOpacity="0.32" />
          <stop offset="0.953125" stopColor="#FAC32D" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SunriseIcon;
