"use client";
import React from "react";
import HighLightLowerMobile from "../__molecules/HighlightLowerMobile";
import GreenGradient from "@/common/icons/greenGradient";
import HighlightUpper from "../__molecules/HighlightUpper";
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";
import HighlightUpperMobile from "../__molecules/HighlightUpperMobile";
import CalculateMoonPhase from "./CalculateMoonPhase";

const TodaysHiglightsMobile = ({
  visibility,
  humidity,
  feelsLike,
  sunRise,
  sunSet,
}: any) => {
  const { language } = useGlobalContext();
  return (
    <section className="md:max-w-[378px] w-full relative overflow-hidden flex flex-col gap-2 ">
      <div className="grid grid-cols-2 gap-3 max-w-[378px] m-auto">
        <div className="h-[164px]">
          <CalculateMoonPhase />
        </div>
        <div className="h-[164px]">
          <HighlightUpperMobile
            type="uvIndex"
            className="col-start-3 col-end-5 row-start-1 row-end-3 h-full gap-1 justify-between"
            dataType={TEXTS[language]?.uvIndex}
          />
        </div>
        <div className="h-[164px]">
          <HighlightUpperMobile
            sunRise={sunRise}
            sunSet={sunSet}
            type="Sunrise"
            className="col-start-5 col-end-7 row-start-1 row-end-3 h-full"
            dataType={TEXTS[language]?.sunriseSunset}
          />
        </div>

        <div className="h-[164px]">
          <HighLightLowerMobile
            number={humidity}
            title={TEXTS[language]?.humidity}
            type="humidity"
            className="col-start-1 col-end-3 h-full p-4 "
            dataType={TEXTS[language]?.humidity}
          />
        </div>
        <div className="h-[164px]">
          <HighLightLowerMobile
            title={TEXTS[language]?.visibility}
            number={visibility}
            type="visibility"
            className="col-start-3 col-end-5 h-full p-4 "
            dataType={TEXTS[language]?.visibility}
          />
        </div>
        <div className="h-[164px]">
          <HighLightLowerMobile
            title={TEXTS[language]?.feelsLike}
            number={feelsLike}
            type="feelsLike"
            className="col-start-5 col-end-7 h-full p-4"
            dataType={TEXTS[language]?.feelsLike}
          />
        </div>
      </div>
    </section>
  );
};

export default TodaysHiglightsMobile;
