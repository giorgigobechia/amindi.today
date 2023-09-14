"use client";
import React, { useEffect, useState } from "react";
import TwentyFiveDayCard from "../__molecules/TwentyFiveDayCard";
import weatherServices from "@/common/services/weatherService";

const TwentyFiveDays = () => {
  const [twentyFiveDays, setTwentyFiveDays] = useState<any>([]);
  const getTwentyFiveDays = async () => {
    await weatherServices.getTwentyFiveDays(setTwentyFiveDays, "tbilisi");
  };

  useEffect(() => {
    getTwentyFiveDays();
  }, []);

  return (
    <div className="flex flex-col  xxl:flex-row md:gap-5 xxl:gap-8 w-fit md:w-full items-center flex-1 justify-around">
      <h1 className=" hidden md:flex md:text-[28px] text-[30px] xxl:text-[40px] bg-gradient-to-b dark:from-blue-400  xxl:flex-col from-[#2E386B] dark:to-white bg-clip-text text-transparent  font-$font">
        25 Days<span> Forecast</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-7 xxl:grid-cols-5 gap-4 md:w-full xxl:w-auto ">
        {twentyFiveDays?.map((day: any, index: any) => (
          <React.Fragment key={index}>
            <TwentyFiveDayCard
              date={day.date}
              icon={day.icon}
              tempMin={day.tempMin}
              tempMax={day.tempMax}
              weather={day.weather}
              index={index}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TwentyFiveDays;
