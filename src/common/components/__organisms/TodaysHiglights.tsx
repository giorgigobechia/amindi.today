"use client";
import React from "react";
import HighlightLower from "../__molecules/HighlightLower";
import GreenGradient from "@/common/icons/greenGradient";
import HighlightUpper from "../__molecules/HighlightUpper";
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";
import CalculateMoonPhase from "@/common/components/__organisms/CalculateMoonPhase";

const windStatus = {
  dataType: "Wind Status",
};
const uvIndex = {
  dataType: "UV Index",
};
const Sunrise = {
  dataType: "Sunrise & Sunset",
};

const TodaysHiglights = ({
  windSpeed,
  visibility,
  humidity,
  feelsLike,
  sunRise,
  sunSet,
}: any) => {
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
        <CalculateMoonPhase  />
        <HighlightUpper
          type="uvIndex"
          className="col-start-3 col-end-5 row-start-1 row-end-3"
          dataType={TEXTS[language]?.uvIndex}
        />
        <HighlightUpper
          sunRise={sunRise}
          sunSet={sunSet}
          type="Sunrise"
          className="col-start-5 col-end-7 row-start-1 row-end-3"
          dataType={TEXTS[language]?.sunriseSunset}
        />

        <HighlightLower
          number={humidity}
          title="The dew point is 17 right now"
          type="humidity"
          className="col-start-1 col-end-3"
          dataType={TEXTS[language]?.humidity}
        />
        <HighlightLower
          title="Haze is affecting visibility"
          number={visibility}
          type="visibility"
          className="col-start-3 col-end-5"
          dataType={TEXTS[language]?.visibility}
        />
        <HighlightLower
          title="Humidity is making it feel hotter."
          number={feelsLike}
          type="feelsLike"
          className="col-start-5 col-end-7"
          dataType={TEXTS[language]?.feelsLike}
        />
      </div>
    </section>
  );
};

export default TodaysHiglights;
