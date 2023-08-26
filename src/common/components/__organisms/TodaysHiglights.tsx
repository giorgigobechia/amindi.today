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
    <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#cea9a927] w-[70%] h-full relative overflow-hidden flex flex-col gap-2">
      <div className="absolute w-full h-full -z-10" style={{ backdropFilter: "blur(14px)" }}></div>
      <div className="absolute w-full h-full -z-20">
        <GreenGradient
          width={1000}
          height={1000}
          className="absolute left-[-300px] bottom-[-350px] rotate-45"
        />
      </div>
      <h5 className="md:text-base xxl:text-lg font-medium h-[7%]">Today’s Highlight</h5>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6 md:grid-rows-3 h-[93%]">
        <HighlightUpper
          props={windStatus}
          type="windStatus"
          className="col-start-1 col-end-3 row-start-1 row-end-3"
        />
        <HighlightUpper
          props={uvIndex}
          type="uvIndex"
          className="col-start-3 col-end-5 row-start-1 row-end-3"
        />
        <HighlightUpper
          props={Sunrise}
          type="Sunrise"
          className="col-start-5 col-end-7 row-start-1 row-end-3"
        />

        <HighlightLower props={humidity} type="humidity" className="col-start-1 col-end-3" />
        <HighlightLower props={visibility} type="visibility" className="col-start-3 col-end-5" />
        <HighlightLower props={feelsLike} type="feelsLike" className="col-start-5 col-end-7" />
      </div>
    </section>
  );
};

export default TodaysHiglights;
