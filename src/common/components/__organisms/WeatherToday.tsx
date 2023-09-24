// "use client";
import { useGlobalContext } from "@/common/context/store";
import EmptyCalendarIcon from "@/common/icons/emptyCalendarIcon";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import PinkGradient from "@/common/icons/pinkGradient";
import SearchIcon from "@/common/icons/searchIcon";
import { WeatherIcons } from "@/common/icons/weatherIcons/WeatherIcons";
import TEXTS from "@/languages/Languages";
import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SearchBar from "../__molecules/SearchBar";
import WindIcon from "@/common/icons/windIcon";
import { translateToLanguage } from "@/common/generalFunctions/functions";
import {
    citiesArray,
    monthsArray,
    weathersArray,
    weekDaysArray,
} from "@/common/languageCases/arrays";

interface PropsTypes {
    currentTemp: number;
    currentWeatherDesc: string;
    month: string;
    day: string;
    min: number;
    max: number;
    windSpeed: string;
}

const WeatherToday = ({
    currentTemp,
    currentWeatherDesc,
    month,
    day,
    min,
    max,
    windSpeed,
}: PropsTypes) => {
    const { resolvedTheme } = useTheme();
    const { language, searchActive, setSearchActive } = useGlobalContext();
    const [currentTime, setCurrentTime] = useState(new Date());
    const dayNum = currentTime.getDate();
    const { activeCity } = useGlobalContext();
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
    const handleSearchClose = () => {
        setSearchActive(false);
    };
    return (
        <section className="md:p-4 xxl:p-7 flex flex-col justify-between  xxl:rounded-[34px] md:rounded-[26px] bg-[#cea9a927] dark:bg-[#355a716b] w-[30%] relative overflow-hidden">
            {searchActive && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <SearchBar handleSearchClose={handleSearchClose} />
                </div>
            )}
            <div
                className="absolute w-full h-full -z-10 "
                style={{ backdropFilter: "blur(14px)" }}
            ></div>
            <div className="absolute w-full h-full -z-20">
                <PinkGradient
                    width={300}
                    height={283}
                    className="absolute xxl:left-10 "
                />
                <GrayGradient
                    width={308}
                    height={300}
                    className="absolute xxl:right-6 xxl:top-[-50px] md:right-2 md:top-[-80px]"
                />
                <GreenGradient
                    width={478}
                    height={360}
                    className="absolute xxl:bottom-10 xxl:left-0 md:bottom-[-50px] md:left-[-30px]"
                />
            </div>
            <div className="flex w-full justify-between mt-4 ">
                <h1 className="xxl:text-[40px] md:text-[30px]">
                    {" "}
                    {translateToLanguage(
                        activeCity,
                        citiesArray,
                        language,
                        "english"
                    )}
                </h1>
                <button
                    className={`rounded-full xxl:py-2 xxl:px-3 md:p-2 bg-[#ffffff4d] dark:bg-[#0000004D] cursor-pointer ${
                        searchActive && "hidden"
                    }`}
                    onClick={() => setSearchActive(true)}
                >
                    <SearchIcon
                        width={0}
                        height={0}
                        className="md:w-[28px] md:h-[28px] xxl:w-[36px] xxl:h-[36px]"
                        stroke={resolvedTheme === "light" ? "black" : "white"}
                    />
                </button>
            </div>
            <div className=" xxl:py-[3vh] flex w-full items-center  gap-[4%]">
                <WeatherIcons iconName={currentWeatherDesc} IconSize={175} />

                <div className="w-[40%]">
                    <h3 className="xxl:text-[54px] md:text-[50px]  leading-tight">
                        {currentTemp}
                        <sup>&deg;</sup>C
                    </h3>
                    <p className="text-sm">
                        {TEXTS[language].min}:{min}° {TEXTS[language].max}:{max}
                        °
                    </p>
                    <br />
                    <p className="xxl:text-base md:text-sm tracking-tight text-justify">
                        {/* {currentWeatherDesc} */}
                        {translateToLanguage(
                            currentWeatherDesc,
                            weathersArray,
                            language,
                            "georgian"
                        )}
                    </p>
                </div>
            </div>
            <div className="py-[2vh] flex flex-col gap-2 border-t-2 border-t-gray-400">
                <p className="flex items-center gap-1 xxl:text-base md:text-sm">
                    <WindIcon
                        width={21}
                        height={21}
                        stroke={
                            resolvedTheme === "light"
                                ? "#000000B2"
                                : "#FFFFFFB2"
                        }
                    />
                    {TEXTS[language].windStatus}: {windSpeed}{" "}
                    {TEXTS[language].kmh}
                </p>
                <p className="flex items-center gap-1 xxl:text-base md:text-sm justify-between ">
                    <div className="flex">
                        <EmptyCalendarIcon
                            width={21}
                            height={21}
                            stroke={
                                resolvedTheme === "light" ? "black" : "white"
                            }
                        />{" "}
                        {translateToLanguage(
                            day,
                            weekDaysArray,
                            language,
                            "georgian"
                        )}
                        ,{" "}
                        {translateToLanguage(
                            month,
                            monthsArray,
                            language,
                            "georgian"
                        )}
                        <span className="pl-2">{dayNum}</span>
                        <span className="pl-2">
                            {" "}
                            <b className="xxl:text-base md:text-sm">
                                {formattedTime}
                            </b>
                        </span>
                    </div>
                    <Link className="underline" href={"/twentyfive-days"}>
                        25 {TEXTS[language].days}
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default WeatherToday;
