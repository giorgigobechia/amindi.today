import React from "react";
import { IconProps } from "../IconTypes";

function Gemini({ className, stroke }: IconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="101"
            height="100"
            viewBox="0 0 101 100"
            className={className}
            fill="none"
        >
            <g clip-path="url(#clip0_954_4465)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31 24H33V82H70V74.5L71.5 32C71.5 26.6222 70.7469 24.8595 70 24.2817V20H47H33H31V24Z"
                    fill={stroke === "black" ? "#41EFCD" : "white"}
                />
                <path
                    d="M3 3C17.3333 16.1667 56.4 34.6 98 3"
                    stroke={stroke}
                    stroke-width="5"
                    stroke-linecap="round"
                />
                <path
                    d="M98.5 96.948C84.1667 83.7813 45.1 65.348 3.5 96.948"
                    stroke={stroke}
                    stroke-width="5"
                    stroke-linecap="round"
                />
                <path
                    d="M29.5 18C33.8333 29.5 40.1 58.4 30.5 82"
                    stroke={stroke}
                    stroke-width="5"
                    stroke-linecap="round"
                />
                <path
                    d="M71.7186 16.5C69.5519 21.1667 65.5186 34.4 66.7186 50"
                    stroke={stroke}
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M65.4239 53.5C62.6239 52.3 64.6667 38.8333 66 32.5L69 31C68 39 69.424 48.8333 69.924 51.5C69.524 53.9 66.7572 53.8333 65.4239 53.5Z"
                    fill={stroke}
                />
                <path
                    d="M67 71.268L67.5 80.768L73.5 82.2679C73.9 81.4679 71 74.268 69.5 70.768C68.3 69.168 67.3333 70.4347 67 71.268Z"
                    fill={stroke}
                />
            </g>
            <defs>
                <clipPath id="clip0_954_4465">
                    <rect width="101" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default Gemini;
