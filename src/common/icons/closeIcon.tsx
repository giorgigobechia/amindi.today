import React from "react";
import { IconProps } from "./IconTypes";

function CloseIcon({ width, height, stroke }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 26 26"
            fill="none"
            stroke={stroke}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M19.8844 19.1165C20.0957 19.3277 20.0957 19.6712 19.8844 19.8824C19.7783 19.9886 19.6396 20.0406 19.5009 20.0406C19.3623 20.0406 19.2236 19.9875 19.1174 19.8824L13.0009 13.7659L6.88443 19.8824C6.77826 19.9886 6.63959 20.0406 6.50093 20.0406C6.36226 20.0406 6.22359 19.9875 6.11742 19.8824C5.90617 19.6712 5.90617 19.3277 6.11742 19.1165L12.2339 13L6.11742 6.88349C5.90617 6.67224 5.90617 6.32879 6.11742 6.11754C6.32867 5.90629 6.67209 5.90629 6.88334 6.11754L12.9998 12.2341L19.1163 6.11754C19.3276 5.90629 19.671 5.90629 19.8823 6.11754C20.0935 6.32879 20.0935 6.67224 19.8823 6.88349L13.7668 13L19.8844 19.1165Z"
                fill="white"
            />
        </svg>
    );
}

export default CloseIcon;
