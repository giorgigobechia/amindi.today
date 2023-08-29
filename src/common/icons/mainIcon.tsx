import React from "react";
import { IconProps } from "./IconTypes";

const MainIcon = ({ width, height, className, stroke }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M29.3333 11.36V5.30669C29.3333 3.42669 28.48 2.66669 26.36 2.66669H20.9733C18.8533 2.66669 18 3.42669 18 5.30669V11.3467C18 13.24 18.8533 13.9867 20.9733 13.9867H26.36C28.48 14 29.3333 13.24 29.3333 11.36Z"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.3333 26.36V20.9733C29.3333 18.8533 28.48 18 26.36 18H20.9733C18.8533 18 18 18.8533 18 20.9733V26.36C18 28.48 18.8533 29.3333 20.9733 29.3333H26.36C28.48 29.3333 29.3333 28.48 29.3333 26.36Z"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 11.36V5.30669C14 3.42669 13.1466 2.66669 11.0266 2.66669H5.63996C3.51996 2.66669 2.66663 3.42669 2.66663 5.30669V11.3467C2.66663 13.24 3.51996 13.9867 5.63996 13.9867H11.0266C13.1466 14 14 13.24 14 11.36Z"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 26.36V20.9733C14 18.8533 13.1466 18 11.0266 18H5.63996C3.51996 18 2.66663 18.8533 2.66663 20.9733V26.36C2.66663 28.48 3.51996 29.3333 5.63996 29.3333H11.0266C13.1466 29.3333 14 28.48 14 26.36Z"
        stroke={stroke}
        strokeOpacity="0.6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MainIcon;
