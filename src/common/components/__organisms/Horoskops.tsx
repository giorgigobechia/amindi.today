import React from "react";
import SingelZodiac from "@/common/components/__molecules/SingleZodiac";
import StarIcon from "@/common/icons/starIcon";
import AriesIcon from "@/common/icons/horoscopes/ariesIcon";
import TaurusIcon from "@/common/icons/horoscopes/taurusIcon";
import GeminiIcon from "@/common/icons/horoscopes/geminiIcon";
import CancerIcon from "@/common/icons/horoscopes/cancerIcon";
import LeoIcon from "@/common/icons/horoscopes/leoIcon";
import VirgoIcon from "@/common/icons/horoscopes/virgoIcon";
import LibraIcon from "@/common/icons/horoscopes/libraIcon";
import ScorpioIcon from "@/common/icons/horoscopes/scorpioIcon";
import SagittariusIcon from "@/common/icons/horoscopes/sagittariusIcon";
import CapricornusIcon from "@/common/icons/horoscopes/capricornusIcon";
import AquariusIcon from "@/common/icons/horoscopes/aquariusIcon";
import PiscesIcon from "@/common/icons/horoscopes/piscesIcon";

export const horoscopes = [
  {
    logo: <AriesIcon />,
    name: "Aries",
    path: "verdzi",
    date: "21 March - 20 April",
  },
  {
    logo: <TaurusIcon />,
    name: "Taurus",
    path: "kuro",
    date: "21 April - 21 May",
  },
  {
    logo: <GeminiIcon />,
    name: "Gemini",
    path: "tyupebi",
    date: "22 May - 21 June",
  },
  {
    logo: <CancerIcon />,
    name: "Cancer",
    path: "kirchxibi",
    date: "22 June - 22 July",
  },
  {
    logo: <LeoIcon />,
    name: "Leo",
    path: "lomi",
    date: "23 July - 23 August",
  },
  {
    logo: <VirgoIcon />,
    name: "Virgo",
    path: "qalwuli",
    date: "24 August - 23 September",
  },
  {
    logo: <LibraIcon />,
    name: "Libra",
    path: "saswori",
    date: "24 September - 23 October",
  },
  {
    logo: <ScorpioIcon />,
    name: "Scorpio",
    path: "morieli",
    date: "24 October - 22 November",
  },
  {
    logo: <SagittariusIcon />,
    name: "Sagittarius",
    path: "mshvildosani",
    date: "23 November - 21 December",
  },
  {
    logo: <CapricornusIcon />,
    name: "Capricornus",
    path: "txis-rqa",
    date: "23 November - 21 December",
  },
  {
    logo: <AquariusIcon />,
    name: "Aquarius",
    path: "merwyuli",
    date: "21 January - 18 February",
  },
  {
    logo: <PiscesIcon />,
    name: "Pisces",
    path: "tevzebi",
    date: "19 February - 20 March",
  },
];

const Horoskops = () => {
  return (
    <article className="grid grid-cols-2 md:gap-x-4 md:gap-y-14 xxl:gap-x-16 xxl:gap-y-20 gap sm:grid-cols-6 w-[80%] mx-auto ">
      {horoscopes.map((horoscope) => {
        return (
          <SingelZodiac
            Icon={horoscope.logo}
            href={horoscope.path}
            title={horoscope.name}
            onClick={() => console.log("asd")}
          />
        );
      })}
    </article>
  );
};

export default Horoskops;
