import React from "react";
import { IconProps } from "./IconTypes";

const BellIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16.0267 3.87988C11.6133 3.87988 8.02666 7.46655 8.02666 11.8799V15.7332C8.02666 16.5465 7.67999 17.7865 7.26666 18.4799L5.73333 21.0265C4.78666 22.5999 5.44 24.3465 7.17333 24.9332C12.92 26.8532 19.12 26.8532 24.8667 24.9332C26.48 24.3999 27.1867 22.4932 26.3067 21.0265L24.7733 18.4799C24.3733 17.7865 24.0267 16.5465 24.0267 15.7332V11.8799C24.0267 7.47988 20.4267 3.87988 16.0267 3.87988Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M18.4933 4.26643C18.08 4.14643 17.6533 4.05309 17.2133 3.99976C15.9333 3.83976 14.7067 3.93309 13.56 4.26643C13.9467 3.27976 14.9067 2.58643 16.0267 2.58643C17.1467 2.58643 18.1067 3.27976 18.4933 4.26643Z"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0267 25.4136C20.0267 27.6136 18.2267 29.4136 16.0267 29.4136C14.9333 29.4136 13.92 28.9602 13.2 28.2402C12.48 27.5202 12.0267 26.5069 12.0267 25.4136"
        stroke="black"
        strokeOpacity="0.7"
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default BellIcon;
