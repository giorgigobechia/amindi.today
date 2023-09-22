import { useGlobalContext } from "@/common/context/store";
import SingleHourForecastMobile from "../__molecules/SingleHourForecastMobile";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import TEXTS from "@/languages/Languages";

interface HourData {
  time: string;
  temperature: string;
}
function HoursForecastMobile() {
  const { globalTwentyFourHours, language } = useGlobalContext();
  return (
    <div className="bg-[#FFFFFF4D] dark:bg-[#0000004d] h-[121px] rounded-[18px] flex flex-col justify-center items-center max-w-[378px] w-full overflow-hidden">
      <h2 className="xxl:text-[20px] md:text-lg text-[14px] w-full text-center bg-[#FFFFFF4D] dark:bg-[#0000004d] pt-3">
        {TEXTS[language]?.twentyfourDayForecast}
      </h2>
      <Splide
        className="bg-[#FFFFFF4D] dark:bg-[#0000004d] h-[121px]  flex justify-center items-center max-w-[378px] w-full"
        options={{
          type: "loop",
          gap: "30px",
          drag: "free",
          arrows: false,
          pagination: false,
          perPage: 3,
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 1,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {globalTwentyFourHours?.map((weather: any, index: number) => (
          <SplideSlide key={index}>
            <SingleHourForecastMobile
              time={weather?.time}
              temperature={weather?.temperature}
              weather={weather?.weather}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default HoursForecastMobile;
