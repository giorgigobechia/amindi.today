import React from "react";
import { IconProps } from "../IconTypes";

function Thunderstorm({ width, height }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.168 16.4453L18.8321 17.5547L15.8685 22H20.9557L15.4773 29.5855L13.856 28.4145L17.0442 24H12.1315L17.168 16.4453Z"
        fill="url(#paint0_linear_241_10149)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.9785 13.2109C29.2237 12.0268 30 10.354 30 8.5C30 4.91015 27.0898 2 23.5 2C21.2543 2 19.2746 3.13882 18.1069 4.87046C18.6177 5.3536 19.0801 5.8875 19.4858 6.46406C20.2289 5.00184 21.7474 4 23.5 4C25.9853 4 28 6.01472 28 8.5C28 9.60602 27.601 10.6188 26.939 11.4024C27.3766 11.9406 27.7298 12.5502 27.9785 13.2109Z"
        fill="url(#paint1_linear_241_10149)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 23.665C5.40237 22.4598 2 18.1419 2 13C2 6.92487 6.74949 2 12.6083 2C17.469 2 21.5661 5.38976 22.821 10.0139C22.9626 10.0047 23.1054 10 23.2493 10C26.9776 10 30 13.134 30 17C30 20.866 26.9776 24 23.2493 24C23.1658 24 23.0827 23.9984 23 23.9953V22H23.3029V21.9996C25.8359 21.9695 28 19.8105 28 17C28 14.1696 25.8053 12 23.2493 12C22.5272 12 21.8339 12.1732 21.2108 12.4855C21.1791 11.9037 21.0937 11.3367 20.9599 10.7899L20.9569 10.7911C20.0091 6.85004 16.5839 4 12.6083 4C7.92179 4 4 7.96046 4 13C4 17.0657 6.55261 20.4291 10 21.5772V23.665Z"
        fill="url(#paint2_linear_241_10149)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_241_10149"
          x1="16.5436"
          y1="16.4453"
          x2="16.5436"
          y2="29.5855"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F5BD52" />
          <stop offset="1" stop-color="#F5DA79" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_241_10149"
          x1="24.0535"
          y1="2"
          x2="24.0535"
          y2="13.2109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#EFC977" />
          <stop offset="1" stop-color="#E07256" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_241_10149"
          x1="16"
          y1="2"
          x2="16"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#95B6F6" />
          <stop offset="1" stop-color="#5193DE" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Thunderstorm;
