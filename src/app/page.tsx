import TodaysHiglights from "@/common/components/__organisms/TodaysHiglights";
import WeatherToday from "@/common/components/__organisms/WeatherToday";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <article className="flex w-full md:gap-3 xxl:gap-6">
        <WeatherToday />
        <TodaysHiglights />
      </article>
    </main>
  );
}
