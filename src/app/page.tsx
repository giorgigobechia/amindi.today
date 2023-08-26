import Advertising from "@/common/components/__organisms/Advertising";
import DaysForecast from "@/common/components/__organisms/DaysForecast";
import TodaysHiglights from "@/common/components/__organisms/TodaysHiglights";
import WeatherToday from "@/common/components/__organisms/WeatherToday";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <article className="flex flex-col gap-3 w-full h-full">
        <div className="flex gap-3 h-[55%]">
          <WeatherToday />
          <TodaysHiglights />
        </div>
        <div className="flex gap-3 h-[45%]">
          <DaysForecast />
          <Advertising />
        </div>
      </article>
    </main>
  );
}
