import React from "react";
import { IconProps } from "./IconTypes";

function MobileRedGradient({ width, height, className }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 140 281"
            className={className}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="-0.5"
                cy="140.5"
                r="140.5"
                fill="url(#paint0_radial_163_1822)"
                fill-opacity="0.7"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_163_1822"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-0.5 140.5) rotate(90) scale(140.5)"
                >
                    <stop stop-color="#E94E77" />
                    <stop offset="1" stop-color="#E94E77" stop-opacity="0" />
                </radialGradient>
            </defs>
        </svg>
    );
}

export default MobileRedGradient;
