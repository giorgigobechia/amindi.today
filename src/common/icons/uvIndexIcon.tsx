"use client";
import React from "react";
import UvIndexIconTwo from "./uvIndexIconTwo";
import UvIndexIconFour from "./uvIndexIconFour";
import UvIndexIconSix from "./uvIndexIconSix";
import UvIndexIconTen from "./uvIndexIconTen";
import UvIndexIconTwelve from "./uvIndexIconTwelve";
import { IconProps } from "./IconTypes";
import { useTheme } from "next-themes";

const UvIndexIcon = ({ width, height, className, stroke }: IconProps) => {
  let uvIndex = 4.3;
  let uvIndexComponent = null;

  if (uvIndex <= 3) {
    uvIndexComponent = (
      <UvIndexIconTwo width={width} height={height} className={className} />
    );
  } else if (uvIndex <= 5) {
    uvIndexComponent = (
      <UvIndexIconFour width={width} height={height} className={className} />
    );
  } else if (uvIndex <= 8) {
    uvIndexComponent = (
      <UvIndexIconSix width={width} height={height} className={className} />
    );
  } else if (uvIndex <= 11) {
    uvIndexComponent = (
      <UvIndexIconTen width={width} height={height} className={className} />
    );
  } else {
    uvIndexComponent = (
      <UvIndexIconTwelve width={width} height={height} className={className} />
    );
  }

  return uvIndexComponent;
};
export default UvIndexIcon;
