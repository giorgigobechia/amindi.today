import React, { ReactNode, useEffect, useRef, useState } from "react";
import TextModal from "../__molecules/showMoreTextModal";
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";
import GrayStarIcon from "@/common/icons/grayStarIcon";
import BgStars from "../__molecules/bgStars";
import { monthsArray } from "@/common/languageCases/arrays";
import { translateToLanguage } from "@/common/generalFunctions/functions";

interface ZoidacDetailProps {
    logo: ReactNode;
    title: string;
    date: string;
    overview: string;
    matching: string;
    career: string;
    love: string;
    health: string;
    videoSrc: string;
}

const ZodiacDetails = ({
    logo,
    title,
    date,
    overview,
    matching,
    career,
    health,
    love,
    videoSrc,
}: ZoidacDetailProps) => {
    const [isShowingMoreText, setIsShowingMoreText] = useState<boolean>(false);
    const [textToShow, setTextToShow] = useState<string>("");
    const outsideClickRef = useRef<null | HTMLDivElement>(null);
    const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const { language } = useGlobalContext();
    const [startDate, startMonth, , endDate, endMonth] = date.split(" ");

    const showFullText = (text: string) => {
        setTextToShow(text);
        setIsShowingMoreText(true);
        setOverlayVisible(true);
    };

    const hideFullText = () => {
        setIsShowingMoreText(false);
        setTextToShow("");
    };

    const handleOutsideClick = (e: any) => {
        if (!outsideClickRef?.current?.contains(e.target)) {
            setTextToShow("");
            setIsShowingMoreText(false);
            setOverlayVisible(false);
        }
    };

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        window.addEventListener("resize", updateScreenWidth);
        setOverlayVisible(false);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
            window.removeEventListener("resize", updateScreenWidth);
        };
    }, [screenWidth]);

    return (
        <section className="md:p-[2%] xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
            <GrayStarIcon
                width={60}
                height={60}
                className="absolute md:top-[70px] md:right-[500px] top-[20px] right-[100px] md:w-[60px] md:h-[60px] w-[40px] h-[40px]"
            />
            {isOverlayVisible && <div className="overlay" id="overlay"></div>}
            <div className="w-full h-full md:flex md:flex-row flex flex-col lg:gap-[120px] md:gap-[80px] gap-[40px] items-center md:p-[35px_10px_35px_10%] p-[35px_25px_35px_25px] relative">
                <div className="md:scale-[1.8] lg:scale-[2.2] scale-[1.1]">
                    {logo} 
                </div>
                <BgStars />
                <div className="flex flex-col gap-6 h-full md:items-start md:text-left items-center text-center md:pt-[50px] xxl:pt-[100px]">
                    <h1 className="text-[34px]">
                        {title} ({startDate}{" "}
                        {translateToLanguage(
                            startMonth,
                            monthsArray,
                            language,
                            "english"
                        )}
                        {" - "}
                        {endDate}{" "}
                        {translateToLanguage(
                            endMonth,
                            monthsArray,
                            language,
                            "english"
                        )}
                        )
                    </h1>
                    <p className="overflow-y-scroll customScrollbar">
                        <span className="font-medium">
                            {TEXTS[language].overview}
                        </span>
                        : {overview}
                    </p>
                    <GrayStarIcon
                        width={140}
                        height={140}
                        className="md:absolute md:top-[180px] md:right-[80px] md:inline-block z-[-5] hidden"
                    />
                    <div className="w-full flex flex-col md:flex-row items-center md:gap-[35px] lg:gap-[58px] gap-[30px]">
                        <div
                            className="lg:w-[50%] md:w-[170%] w-[80%] grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-6"
                            ref={outsideClickRef}
                        >
                            <div className="w-full flex flex-col text-[14px] overflow-hidden">
                                <p className="text-[16px] font-medium">
                                    {TEXTS[language].matchingZodiac}:
                                </p>
                                <p
                                    className={
                                        screenWidth > 1024
                                            ? "textEndThreeDot"
                                            : ""
                                    }
                                >
                                    {matching}
                                </p>
                                {screenWidth > 1024 && (
                                    <span
                                        onClick={() => showFullText("matching")}
                                        className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200 "
                                    >
                                        {TEXTS[language].seeMore}
                                    </span>
                                )}

                                {isShowingMoreText &&
                                    textToShow === "matching" &&
                                    screenWidth > 1024 && (
                                        <TextModal
                                            title={
                                                TEXTS[language].matchingZodiac
                                            }
                                            text={matching}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>
                            <div className="w-full flex flex-col text-[14px] overflow-ellipsis overflow-hidden">
                                <p className="text-[16px] font-medium">
                                    {TEXTS[language].career}:
                                </p>
                                <p
                                    className={
                                        screenWidth > 1024
                                            ? "textEndThreeDot"
                                            : ""
                                    }
                                >
                                    {career}
                                </p>
                                {screenWidth > 1024 && (
                                    <span
                                        onClick={() => showFullText("career")}
                                        className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200 "
                                    >
                                        {TEXTS[language].seeMore}
                                    </span>
                                )}

                                {isShowingMoreText &&
                                    textToShow === "career" &&
                                    screenWidth > 1024 && (
                                        <TextModal
                                            title={TEXTS[language].career}
                                            text={career}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>

                            <div className="w-full flex flex-col text-[14px] overflow-ellipsis overflow-hidden ">
                                <p className="text-[16px] font-medium">
                                    {TEXTS[language].health}:
                                </p>
                                <p
                                    className={
                                        screenWidth > 1024
                                            ? "textEndThreeDot"
                                            : ""
                                    }
                                >
                                    {health}
                                </p>
                                {screenWidth > 1024 && (
                                    <span
                                        onClick={() => showFullText("health")}
                                        className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200 "
                                    >
                                        {TEXTS[language].seeMore}
                                    </span>
                                )}

                                {isShowingMoreText &&
                                    textToShow === "health" &&
                                    screenWidth > 1024 && (
                                        <TextModal
                                            title={TEXTS[language].health}
                                            text={health}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>
                            <div className="w-full flex flex-col text-[14px] overflow-ellipsis overflow-hidden">
                                <p className="text-[16px] overflow-ellipsis font-medium">
                                    {TEXTS[language].love}:
                                </p>
                                <p
                                    className={
                                        screenWidth > 1024
                                            ? "textEndThreeDot"
                                            : ""
                                    }
                                >
                                    {love}
                                </p>
                                {screenWidth > 1024 && (
                                    <span
                                        onClick={() => showFullText("love")}
                                        className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200"
                                    >
                                        {TEXTS[language].seeMore}
                                    </span>
                                )}
                                {isShowingMoreText &&
                                    textToShow === "love" &&
                                    screenWidth > 1024 && (
                                        <TextModal
                                            title={TEXTS[language].love}
                                            text={love}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>
                        </div>
                        <div className="max-w-[400px] w-full h-[225px]">
                            <iframe
                                allowFullScreen
                                src={videoSrc}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZodiacDetails;
