import React from "react";
import { IconProps } from "./IconTypes";

function BlueIcon({ width, height, className }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 411 306"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <ellipse
                cx="205.292"
                cy="153.248"
                rx="212.007"
                ry="142.619"
                transform="rotate(-20.2749 205.292 153.248)"
                fill="url(#paint0_radial_59_2539)"
                fill-opacity="0.5"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_59_2539"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(205.292 153.248) rotate(90) scale(142.619 212.007)"
                >
                    <stop stop-color="#1D5C9B" />
                    <stop offset="1" stop-color="#1D5C9B" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default BlueIcon;
