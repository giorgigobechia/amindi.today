import WeatherToday from "@/common/components/__organisms/WeatherToday";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <article className="flex w-full">
        <WeatherToday />
      </article>
    </main>
  );
}
