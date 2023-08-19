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
    <section className="px-7 py-5 rounded-[34px] bg-[#cea9a927] w-[70%] relative overflow-hidden flex flex-col gap-2">
      <div
        className="absolute w-full h-full -z-10 "
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div className="absolute w-full h-full -z-20">
        <GreenGradient
          width={1000}
          height={1000}
          className="absolute left-[-300px] bottom-[-350px] rotate-45"
        />
      </div>
      <h5 className="text-lg font-medium">Today’s Highlight</h5>
      <div className="flex gap-7 flex-1">
        <div className="flex flex-col gap-4 flex-1">
          <HighlightUpper props={windStatus} type="windStatus" />
          <HighlightLower props={humidity} type="humidity" />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <HighlightUpper props={uvIndex} type="uvIndex" />
          <HighlightLower props={visibility} type="visibility" />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <HighlightUpper props={Sunrise} type="Sunrise" />
          <HighlightLower props={feelsLike} type="feelsLike" />
        </div>
      </div>
    </section>
  );
};

export default TodaysHiglights;
