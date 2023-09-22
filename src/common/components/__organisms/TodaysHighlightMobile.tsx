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
    <section className="md:max-w-[378px] w-full relative overflow-hidden flex flex-col gap-2 h-full">
      <div className="grid grid-cols-2 h-full gap-3 max-w-[378px] m-auto">
        <div>
          <CalculateMoonPhase />
        </div>
        <div>
          <HighlightUpperMobile
            type="uvIndex"
            className="col-start-3 col-end-5 row-start-1 row-end-3 h-full gap-1 justify-between"
            dataType={TEXTS[language]?.uvIndex}
          />
        </div>
        <div>
          <HighlightUpperMobile
            sunRise={sunRise}
            sunSet={sunSet}
            type="Sunrise"
            className="col-start-5 col-end-7 row-start-1 row-end-3 h-full"
            dataType={TEXTS[language]?.sunriseSunset}
          />
        </div>

        <div>
          <HighLightLowerMobile
            number={humidity}
            title="The dew point is 17 right now"
            type="humidity"
            className="col-start-1 col-end-3 h-full p-4 "
            dataType={TEXTS[language]?.humidity}
          />
        </div>
        <div>
          <HighLightLowerMobile
            title="Haze is affecting visibility"
            number={visibility}
            type="visibility"
            className="col-start-3 col-end-5 h-full p-4 "
            dataType={TEXTS[language]?.visibility}
          />
        </div>
        <div>
          <HighLightLowerMobile
            title="Humidity is making it feel hotter."
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
