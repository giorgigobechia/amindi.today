import React from "react";
import { IconProps } from "./IconTypes";

const ThemeMoonIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      className={className}
    >
      <path
        d="M1.43794 8.79735C1.69294 12.4453 4.78836 15.4132 8.49294 15.5761C11.1067 15.6894 13.4442 14.4711 14.8467 12.5515C15.4275 11.7653 15.1159 11.2411 14.1454 11.4182C13.6709 11.5032 13.1821 11.5386 12.6721 11.5174C9.20836 11.3757 6.37502 8.4786 6.36086 5.05735C6.35377 4.13652 6.54502 3.26527 6.89211 2.47193C7.27461 1.5936 6.81419 1.17568 5.92877 1.5511C3.12377 2.73402 1.20419 5.56027 1.43794 8.79735Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ThemeMoonIcon;
