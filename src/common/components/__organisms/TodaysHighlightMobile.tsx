"use client";
import React from "react";
import HighLightLowerMobile from "../__molecules/HighlightLowerMobile";
import GreenGradient from "@/common/icons/greenGradient";
import HighlightUpper from "../__molecules/HighlightUpper";
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";
import HighlightUpperMobile from "../__molecules/HighlightUpperMobile";

const humidity = {
  dataType: "Humidity",
  number: 30,
  title: "The dew point is 17 right now",
};
const visibility = {
  dataType: "Visibility",
  number: 10,
  title: "Haze is affecting visibility",
};
const feelsLike = {
  dataType: "Feels Like",
  number: 25,
  title: "Humidity is making it feel hotter.",
};

const windStatus = {
  dataType: "Wind Status",
};
const uvIndex = {
  dataType: "UV Index",
};
const Sunrise = {
  dataType: "Sunrise & Sunset",
};

const TodaysHiglightsMobile = () => {
  const { language } = useGlobalContext();
  return (
    <section className="md:max-w-[378px] w-full relative overflow-hidden flex flex-col gap-2 h-full">
      {/* <div
        className="absolute w-full h-full -z-10"
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div className="absolute w-full h-full -z-20">
        <GreenGradient
          width={1000}
          height={1000}
          className="absolute left-[-300px] bottom-[-350px] rotate-45"
        />
      </div> */}
      {/* <h5 className="md:text-base xxl:text-lg font-medium h-[7%] dark:text-white">
        {TEXTS[language]?.todaysHighlights}
      </h5> */}
      <div className="grid grid-cols-2 h-full gap-3 max-w-[378px] mx-auto w-full">
        <div>
          <HighlightUpperMobile
            props={windStatus}
            type="windStatus"
            className=""
            dataType={TEXTS[language]?.windStatus}
          />
        </div>
        <div>
          <HighlightUpperMobile
            props={uvIndex}
            type="uvIndex"
            className="col-start-3 col-end-5 row-start-1 row-end-3 px-[20px] py-[25px] justify-between"
            dataType={TEXTS[language]?.uvIndex}
          />
        </div>
        <div>
          <HighlightUpperMobile
            props={Sunrise}
            type="Sunrise"
            className="col-start-5 col-end-7 row-start-1 row-end-3 px-[20px] py-[25px]"
            dataType={TEXTS[language]?.sunriseSunset}
          />
        </div>

        <div>
          <HighLightLowerMobile
            props={humidity}
            type="humidity"
            className="col-start-1 col-end-3 px-[20px] py-[25px]"
            dataType={TEXTS[language]?.humidity}
          />
        </div>
        <div>
          <HighLightLowerMobile
            props={visibility}
            type="visibility"
            className="col-start-3 col-end-5 px-[20px] py-[25px]"
            dataType={TEXTS[language]?.visibility}
          />
        </div>
        <div>
          <HighLightLowerMobile
            props={feelsLike}
            type="feelsLike"
            className="col-start-5 col-end-7 px-[20px] py-[25px]"
            dataType={TEXTS[language]?.feelsLike}
          />
        </div>
      </div>
    </section>
  );
};

export default TodaysHiglightsMobile;
