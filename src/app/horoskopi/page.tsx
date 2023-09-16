"use client";
import SingelZodiac from "@/common/components/__molecules/SingleZodiac";
import Horoskops from "@/common/components/__organisms/Horoskops";
import { useGlobalContext } from "@/common/context/store";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import PinkGradient from "@/common/icons/pinkGradient";
import StarIcon from "@/common/icons/starIcon";
import TEXTS from "@/languages/Languages";
import React from "react";

const Zodiaco = () => {
    const { language } = useGlobalContext();
    return (
        <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
            <div
                className="absolute w-full h-full -z-10 "
                style={{ backdropFilter: "blur(14px)" }}
            ></div>
            <div className="absolute w-full h-full -z-20">
                <PinkGradient
                    width={700}
                    height={683}
                    className="absolute md:right-24 xxl:left-[500px] "
                />
                <GrayGradient
                    width={508}
                    height={400}
                    className="absolute xxl:right-[400px] xxl:bottom-[80px] md:right-[400px] md:bottom-[80px]"
                />
            </div>
            <div className="flex items-center justify-center md:pt-10 xxl:pt-16 relative ">
                <h1 className="text-center md:text-5xl font-light bg-gradient-to-b dark:from-blue-400  from-[#2E386B] dark:to-white bg-clip-text text-transparent flex flex-col md:gap-4 xxl:gap-6 pl-10">
                    {TEXTS[language].diveDeep} <br></br>
                    <span>{TEXTS[language].celestialIdentity}</span>
                </h1>
                <StarIcon
                    width={0}
                    height={0}
                    className="md:w-[40px] md:h-[40px] relative bottom-16"
                />
                <StarIcon
                    width={0}
                    height={0}
                    className="md:w-[85px] md:h-[85px]"
                />
            </div>
            <Horoskops />
        </section>
    );
};

export default Zodiaco;
