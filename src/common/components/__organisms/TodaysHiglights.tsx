import React from "react";
import HighlightLower from "../__molecules/HighlightLower";
import GreenGradient from "@/common/icons/greenGradient";
import HighlightUpper from "../__molecules/HighlightUpper";

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
  return (
    <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#cea9a927] w-[70%] relative overflow-hidden flex flex-col gap-2">
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
      <h5 className=" md:text-base xxl:text-lg font-medium">
        Today’s Highlight
      </h5>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3">
        <HighlightUpper props={windStatus} type="windStatus" />
        <HighlightUpper props={uvIndex} type="uvIndex" />
        <HighlightUpper props={Sunrise} type="Sunrise" />

        <HighlightLower props={humidity} type="humidity" />
        <HighlightLower props={visibility} type="visibility" />
        <HighlightLower props={feelsLike} type="feelsLike" />
      </div>
    </section>
  );
};

export default TodaysHiglights;
