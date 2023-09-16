import React, { ReactNode, useEffect, useRef, useState } from "react";
import TextModal from "../__molecules/showMoreTextModal";

interface ZoidacDetailProps {
    logo: ReactNode;
    title: string;
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

    const showFullText = (text: string) => {
        setTextToShow(text);
        setIsShowingMoreText(true);
    };

    const hideFullText = () => {
        setIsShowingMoreText(false);
        setTextToShow("");
    };

    const handleOutsideClick = (e: any) => {
        if (!outsideClickRef?.current?.contains(e.target)) {
            setTextToShow("");
            setIsShowingMoreText(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
    }, []);

    return (
        <section className="md:p-[2%] xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
            <div className="w-full h-full md:flex md:flex-row flex flex-col lg:gap-[120px] md:gap-[80px] gap-[40px] items-center md:p-[35px_10px_35px_10%] p-[35px_25px_35px_25px] relative">
                <div className="md:scale-[1.8] lg:scale-[2.2] scale-[1.1]">
                    {logo}
                </div>
                <div className="flex flex-col gap-6 h-full md:items-start md:text-left items-center text-center">
                    <h1 className="text-[34px]">{title}</h1>
                    <p>Overview: {overview}</p>
                    <div className="w-full flex flex-col md:flex-row items-center md:gap-[35px] lg:gap-[58px] gap-[30px]">
                        <div
                            className="lg:w-[50%] md:w-[170%] w-[80%] grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-6"
                            ref={outsideClickRef}
                        >
                            <div className="w-full flex flex-col text-[14px] overflow-hidden">
                                <p className="text-[16px]">Matching Zodiac</p>
                                <p className={"textEndThreeDot"}>{matching}</p>
                                <span
                                    onClick={() => showFullText("matching")}
                                    className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200 "
                                >
                                    See More
                                </span>
                                {isShowingMoreText &&
                                    textToShow === "matching" && (
                                        <TextModal
                                            title="Matching Zodiac"
                                            text={matching}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>
                            <div className="w-full flex flex-col text-[14px] overflow-ellipsis overflow-hidden">
                                <p className="text-[16px]">Career</p>
                                <p className={"textEndThreeDot"}>{career}</p>
                                <span
                                    onClick={() => showFullText("career")}
                                    className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200 "
                                >
                                    See More
                                </span>
                                {isShowingMoreText &&
                                    textToShow === "career" && (
                                        <TextModal
                                            title="Career"
                                            text={career}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>
                            <div className="w-full flex flex-col text-[14px] overflow-ellipsis overflow-hidden ">
                                <p className="text-[16px]">Health</p>
                                <p className={"textEndThreeDot"}>{health}</p>
                                <span
                                    onClick={() => showFullText("health")}
                                    className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200 "
                                >
                                    See More
                                </span>
                                {isShowingMoreText &&
                                    textToShow === "health" && (
                                        <TextModal
                                            title="Health"
                                            text={health}
                                            hideFullText={hideFullText}
                                        />
                                    )}
                            </div>
                            <div className="w-full flex flex-col text-[14px] overflow-ellipsis overflow-hidden">
                                <p className="text-[16px] overflow-ellipsis">
                                    Love
                                </p>
                                <p className={"textEndThreeDot"}>{love}</p>
                                <span
                                    onClick={() => showFullText("love")}
                                    className="cursor-pointer underline dark:hover:text-[#ffffffcd] hover:text-[#000000b5] duration-200"
                                >
                                    See More
                                </span>
                                {isShowingMoreText && textToShow === "love" && (
                                    <TextModal
                                        title="Love"
                                        text={love}
                                        hideFullText={hideFullText}
                                    />
                                )}
                            </div>
                        </div>
                        <div className="max-w-[400px] w-full h-[225px] ">
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
