import CloseIcon from "@/common/icons/closeIcon";
import { useTheme } from "next-themes";
import React from "react";

interface modalProps {
    title: string;
    text: string;
    hideFullText: () => void;
}

function ShowMoreTextModal({ title, text, hideFullText }: modalProps) {
    const { resolvedTheme } = useTheme();
    return (
        <div
            style={{
                overflow: "hidden",
            }}
            className="z-40 inset-x-[50px] md:left-[95px] md:right-[160px] md:top-[60px] md:bottom-[70px] dark:bg-[#151f27] bg-[#fff] absolute rounded-[30px] p-[25px] text-center dark:shadow-[0_0_20px_#151f27] shadow-[0_0_20px_[white]] flex flex-col overflow-scroll"
        >
            <div className="w-full h-full relative flex flex-col ">
                <h2 className="mb-[20px] text-[20px] ">{title}</h2>
                <span
                    className="absolute right-3 top-0 cursor-pointer"
                    onClick={hideFullText}
                >
                    <CloseIcon
                        width={30}
                        height={30}
                        stroke={resolvedTheme === "light" ? "black" : "white"}
                    />
                </span>
                <div className="flex-grow ">{text}</div>
            </div>
        </div>
    );
}

export default ShowMoreTextModal;
