"use client";
import React from "react";
import HighlightLower from "../__molecules/HighlightLower";
import GreenGradient from "@/common/icons/greenGradient";
import HighlightUpper from "../__molecules/HighlightUpper";
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";

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

const TodaysHiglights = () => {
  const { language } = useGlobalContext();
  return (
    <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#cea9a927] dark:bg-[#355a7145] w-[70%] h-full relative overflow-hidden flex flex-col gap-2">
      <div
        className="absolute w-full h-full -z-10"
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div className="absolute w-full h-full -z-20">
        <GreenGradient
          width={1000}
          height={1000}
          className="absolute left-[-300px] bottom-[-350px] rotate-45"
        />
      </div>
      <h5
        className="md:text-base xxl:text-lg font-medium h-[7%] dark:text-white"
        style={{
          fontWeight: 300,
        }}
      >
        {TEXTS[language]?.todaysHighlights}
      </h5>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-3 h-[93%]">
        <HighlightUpper
          props={windStatus}
          type="windStatus"
          className="col-start-1 col-end-3 row-start-1 row-end-3"
          dataType={TEXTS[language]?.windStatus}
        />
        <HighlightUpper
          props={uvIndex}
          type="uvIndex"
          className="col-start-3 col-end-5 row-start-1 row-end-3"
          dataType={TEXTS[language]?.uvIndex}
        />
        <HighlightUpper
          props={Sunrise}
          type="Sunrise"
          className="col-start-5 col-end-7 row-start-1 row-end-3"
          dataType={TEXTS[language]?.sunriseSunset}
        />

        <HighlightLower
          props={humidity}
          type="humidity"
          className="col-start-1 col-end-3"
          dataType={TEXTS[language]?.humidity}
        />
        <HighlightLower
          props={visibility}
          type="visibility"
          className="col-start-3 col-end-5"
          dataType={TEXTS[language]?.visibility}
        />
        <HighlightLower
          props={feelsLike}
          type="feelsLike"
          className="col-start-5 col-end-7"
          dataType={TEXTS[language]?.feelsLike}
        />
      </div>
    </section>
  );
};

export default TodaysHiglights;
