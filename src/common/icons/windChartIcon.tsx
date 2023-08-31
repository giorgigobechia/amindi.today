"use client";
import React from "react";
import { IconProps } from "./IconTypes";
import { useTheme } from "next-themes";

const WindChartIcon = ({ width, height, className }: IconProps) => {
  const { resolvedTheme } = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 314 117"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 54.6865C3.29834 53.9494 9.61878 49.7109 16.5138 38.6541C20.7274 31.0985 33.4066 19.3045 50.4144 32.5728L64.779 43.6297C67.4604 45.841 74.0873 48.937 79.1436 43.6297C82.0166 39.5755 91.4398 31.5777 106.149 32.0199C109.022 31.8357 116.147 29.0346 121.663 19.3045C127.217 7.87911 142.003 -9.44333 156.713 12.6704L165.331 25.3859C167.821 29.0715 175.444 34.5631 186.017 27.0444L200.956 19.3045C206.702 15.6189 219.917 11.3436 226.812 23.7273L236.58 44.1825C239.07 47.131 245.659 51.5906 252.094 45.8411L268.757 29.8086C273.162 27.5972 283.466 25.1647 289.442 33.1257L302.083 52.4752C303.615 54.318 307.944 57.4508 313 55.2394"
        stroke="url(#paint0_linear_63_3620)"
        strokeWidth="4"
      />
      <rect
        x="1"
        y="113"
        width="6"
        height="4"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="18"
        y="103"
        width="6"
        height="14"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="35"
        y="111"
        width="6"
        height="6"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="52"
        y="97"
        width="6"
        height="20"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="69"
        y="109"
        width="6"
        height="8"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="86"
        y="106"
        width="6"
        height="11"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="103"
        y="109"
        width="6"
        height="8"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="120"
        y="100"
        width="6"
        height="17"
        fill="url(#paint1_linear_63_3620)"
      />
      <rect
        x="137"
        y="96"
        width="6"
        height="21"
        fill="url(#paint2_linear_63_3620)"
      />
      <rect
        x="154"
        y="82"
        width="6"
        height="35"
        fill="url(#paint3_linear_63_3620)"
      />
      <rect
        x="171"
        y="100"
        width="6"
        height="17"
        fill="url(#paint4_linear_63_3620)"
      />
      <rect
        x="188"
        y="96"
        width="6"
        height="21"
        fill="url(#paint5_linear_63_3620)"
      />
      <rect
        x="205"
        y="104"
        width="6"
        height="13"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="222"
        y="98"
        width="6"
        height="19"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="239"
        y="103"
        width="6"
        height="14"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="256"
        y="109"
        width="6"
        height="8"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="273"
        y="103"
        width="6"
        height="14"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="290"
        y="98"
        width="6"
        height="19"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />
      <rect
        x="307"
        y="109"
        width="6"
        height="8"
        fill={resolvedTheme === "light" ? "black" : "white"}
        fillOpacity="0.46"
      />

      <defs>
        <linearGradient
          id="paint0_linear_63_3620"
          x1="157"
          y1="2"
          x2="157"
          y2="56"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7E6F4" />
          <stop offset="1" stopColor="#262626" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_63_3620"
          x1="123"
          y1="100"
          x2="123"
          y2="117"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.192708" stopColor="#A8E7F5" />
          <stop offset="0.5625" stopColor="#D9D5D6" />
          <stop offset="0.921875" stopColor="#A2A2A2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_63_3620"
          x1="140"
          y1="96"
          x2="140"
          y2="117"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.192708" stopColor="#A8E7F5" />
          <stop offset="0.5625" stopColor="#D9D5D6" />
          <stop offset="0.921875" stopColor="#A2A2A2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_63_3620"
          x1="157"
          y1="82"
          x2="157"
          y2="117"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.192708" stopColor="#A8E7F5" />
          <stop offset="0.5625" stopColor="#D9D5D6" />
          <stop offset="0.921875" stopColor="#A2A2A2" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_63_3620"
          x1="174"
          y1="100"
          x2="174"
          y2="117"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.192708" stopColor="#A8E7F5" />
          <stop offset="0.5625" stopColor="#D9D5D6" />
          <stop offset="0.921875" stopColor="#A2A2A2" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_63_3620"
          x1="191"
          y1="96"
          x2="191"
          y2="117"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.192708" stopColor="#A8E7F5" />
          <stop offset="0.5625" stopColor="#D9D5D6" />
          <stop offset="0.921875" stopColor="#A2A2A2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default WindChartIcon;

<svg
  width="314"
  height="117"
  viewBox="0 0 314 117"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M1 54.6865C3.29834 53.9494 9.61878 49.7109 16.5138 38.6541C20.7274 31.0985 33.4066 19.3045 50.4144 32.5728L64.779 43.6297C67.4604 45.841 74.0873 48.937 79.1436 43.6297C82.0166 39.5755 91.4398 31.5777 106.149 32.0199C109.022 31.8357 116.147 29.0346 121.663 19.3045C127.217 7.87911 142.003 -9.44333 156.713 12.6704L165.331 25.3859C167.821 29.0715 175.444 34.5631 186.017 27.0444L200.956 19.3045C206.702 15.6189 219.917 11.3436 226.812 23.7273L236.58 44.1825C239.07 47.131 245.659 51.5906 252.094 45.8411L268.757 29.8086C273.162 27.5972 283.466 25.1647 289.442 33.1257L302.083 52.4752C303.615 54.318 307.944 57.4508 313 55.2394"
    stroke="url(#paint0_linear_59_2602)"
    stroke-width="4"
  />
  <rect x="1" y="113" width="6" height="4" fill="white" fill-opacity="0.46" />
  <rect x="18" y="103" width="6" height="14" fill="white" fill-opacity="0.46" />
  <rect x="35" y="111" width="6" height="6" fill="white" fill-opacity="0.46" />
  <rect x="52" y="97" width="6" height="20" fill="white" fill-opacity="0.46" />
  <rect x="69" y="109" width="6" height="8" fill="white" fill-opacity="0.46" />
  <rect x="86" y="106" width="6" height="11" fill="white" fill-opacity="0.46" />
  <rect x="103" y="109" width="6" height="8" fill="white" fill-opacity="0.46" />
  <rect
    x="120"
    y="100"
    width="6"
    height="17"
    fill="url(#paint1_linear_59_2602)"
  />
  <rect
    x="137"
    y="96"
    width="6"
    height="21"
    fill="url(#paint2_linear_59_2602)"
  />
  <rect
    x="154"
    y="82"
    width="6"
    height="35"
    fill="url(#paint3_linear_59_2602)"
  />
  <rect
    x="171"
    y="100"
    width="6"
    height="17"
    fill="url(#paint4_linear_59_2602)"
  />
  <rect
    x="188"
    y="96"
    width="6"
    height="21"
    fill="url(#paint5_linear_59_2602)"
  />
  <rect
    x="205"
    y="104"
    width="6"
    height="13"
    fill="white"
    fill-opacity="0.46"
  />
  <rect x="222" y="98" width="6" height="19" fill="white" fill-opacity="0.46" />
  <rect
    x="239"
    y="103"
    width="6"
    height="14"
    fill="white"
    fill-opacity="0.46"
  />
  <rect x="256" y="109" width="6" height="8" fill="white" fill-opacity="0.46" />
  <rect
    x="273"
    y="103"
    width="6"
    height="14"
    fill="white"
    fill-opacity="0.46"
  />
  <rect x="290" y="98" width="6" height="19" fill="white" fill-opacity="0.46" />
  <rect x="307" y="109" width="6" height="8" fill="white" fill-opacity="0.46" />
  <defs>
    <linearGradient
      id="paint0_linear_59_2602"
      x1="157"
      y1="2"
      x2="157"
      y2="56"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#A7E6F4" />
      <stop offset="1" stop-color="white" stop-opacity="0" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_59_2602"
      x1="123"
      y1="100"
      x2="123"
      y2="117"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.192708" stop-color="#30F6FF" />
      <stop offset="0.5625" stop-color="#5AC4DE" stop-opacity="0.49" />
      <stop offset="0.921875" stop-color="#2062A1" stop-opacity="0.5" />
    </linearGradient>
    <linearGradient
      id="paint2_linear_59_2602"
      x1="140"
      y1="96"
      x2="140"
      y2="117"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.192708" stop-color="#30F6FF" />
      <stop offset="0.5625" stop-color="#5AC4DE" stop-opacity="0.49" />
      <stop offset="0.921875" stop-color="#2062A1" stop-opacity="0.5" />
    </linearGradient>
    <linearGradient
      id="paint3_linear_59_2602"
      x1="157"
      y1="82"
      x2="157"
      y2="117"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.192708" stop-color="#30F6FF" />
      <stop offset="0.5625" stop-color="#5AC4DE" stop-opacity="0.49" />
      <stop offset="0.921875" stop-color="#2062A1" stop-opacity="0.5" />
    </linearGradient>
    <linearGradient
      id="paint4_linear_59_2602"
      x1="174"
      y1="100"
      x2="174"
      y2="117"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.192708" stop-color="#30F6FF" />
      <stop offset="0.5625" stop-color="#5AC4DE" stop-opacity="0.49" />
      <stop offset="0.921875" stop-color="#2062A1" stop-opacity="0.5" />
    </linearGradient>
    <linearGradient
      id="paint5_linear_59_2602"
      x1="191"
      y1="96"
      x2="191"
      y2="117"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0.192708" stop-color="#30F6FF" />
      <stop offset="0.5625" stop-color="#5AC4DE" stop-opacity="0.49" />
      <stop offset="0.921875" stop-color="#2062A1" stop-opacity="0.5" />
    </linearGradient>
  </defs>
</svg>;
