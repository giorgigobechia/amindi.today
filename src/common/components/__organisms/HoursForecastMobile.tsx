import SingleHourForecastMobile from "../__molecules/SingleHourForecastMobile";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

interface HourData {
  time: string;
  temperature: string;
}
function HoursForecastMobile() {
  const hoursData: HourData[] = [
    { time: "Now", temperature: "+19" },
    { time: "12", temperature: "+13" },
    { time: "13", temperature: "-28" },
    { time: "14", temperature: "+38" },
    { time: "15", temperature: "+28" },
    { time: "16", temperature: "+18" },
    { time: "17", temperature: "+18" },
    { time: "18", temperature: "+18" },
    { time: "19", temperature: "+18" },
    { time: "20", temperature: "+18" },
    { time: "21", temperature: "+18" },
    { time: "22", temperature: "+18" },
    { time: "23", temperature: "+18" },
    { time: "00", temperature: "+18" },
    { time: "01", temperature: "+18" },
    { time: "02", temperature: "+18" },
    { time: "03", temperature: "+18" },
    { time: "04", temperature: "+18" },
    { time: "05", temperature: "+18" },
    { time: "06", temperature: "+18" },
    { time: "07", temperature: "+18" },
    { time: "08", temperature: "+18" },
    { time: "09", temperature: "+18" },
    { time: "10", temperature: "+18" },
  ];
  return (
    <>
      <Splide
        className="bg-[#FFFFFF4D] dark:bg-[#0000004d] h-[121px] rounded-[18px] flex justify-center items-center max-w-[378px] w-full"
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
        {hoursData.map((hour, index) => (
          <SplideSlide key={index}>
            <SingleHourForecastMobile {...hour} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
}

export default HoursForecastMobile;
