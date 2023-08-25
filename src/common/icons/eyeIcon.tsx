import React from "react";
import { IconProps } from "./IconTypes";

const EyeIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.6485 11.5505C22.2006 9.12723 18.9584 5.0625 13.4999 5.0625C8.04137 5.0625 4.79913 9.12723 3.35125 11.5505C2.63125 12.7531 2.63128 14.2469 3.35016 15.4506C4.79803 17.8739 8.04028 21.9386 13.4988 21.9386C18.9573 21.9386 22.1995 17.8739 23.6474 15.4506C24.3674 14.2469 24.3674 12.7531 23.6485 11.5505ZM22.6833 14.8736C22.6822 14.8736 22.6822 14.8736 22.6833 14.8736C21.3581 17.0921 18.4026 20.8125 13.4999 20.8125C8.59712 20.8125 5.64165 17.0909 4.3164 14.8736C3.81128 14.0264 3.81125 12.9747 4.3175 12.1275C5.64163 9.90903 8.59712 6.1886 13.4999 6.1886C18.4026 6.1886 21.3581 9.91016 22.6833 12.1275C23.1885 12.9735 23.1885 14.0264 22.6833 14.8736ZM13.4999 9C11.0181 9 8.99988 11.0182 8.99988 13.5C8.99988 15.9818 11.0181 18 13.4999 18C15.9816 18 17.9999 15.9818 17.9999 13.5C17.9999 11.0182 15.9816 9 13.4999 9ZM13.4999 16.875C11.6391 16.875 10.1249 15.3608 10.1249 13.5C10.1249 11.6392 11.6391 10.125 13.4999 10.125C15.3606 10.125 16.8749 11.6392 16.8749 13.5C16.8749 15.3608 15.3606 16.875 13.4999 16.875Z"
        fill="black"
        fillOpacity="0.7"
      />
    </svg>
  );
};

export default EyeIcon;
