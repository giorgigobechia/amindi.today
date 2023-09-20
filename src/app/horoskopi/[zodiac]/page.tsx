"use client";
import ZodiacDetails from "@/common/components/__organisms/ZodiacDetails";
import React, { useState, useEffect, ReactNode } from "react";
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
import zodiacServices from "@/common/services/zodiacService";
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";
import { MonthCases } from "@/common/languageCases/MonthCases";
import WhiteGradient from "@/common/icons/whiteGradient";

interface props {
  params: { zodiac: string };
}

interface zodiacProps {
  logo: ReactNode;
  name: string;
  date: string;
}
const zodiacs = [
  "verdzi",
  "kuro",
  "tyupebi",
  "kirchxibi",
  "lomi",
  "qalwuli",
  "saswori",
  "morieli",
  "mshvildosani",
  "txis-rqa",
  "merwyuli",
  "tevzebi",
];

const ZodiacPage = ({ params }: props) => {
  const [zodiac, setZodiac] = useState<any>({ love: "" });
  const zodiacName: string = params.zodiac;
  const { language } = useGlobalContext();

  const zodiacDetails: any = {
    verdzi: {
      logo: <AriesIcon />,
      name: TEXTS[language].Aries,
      date: "21 March - 20 April",
    },
    kuro: {
      logo: <TaurusIcon />,
      name: TEXTS[language].Taurus,
      date: "21 April - 21 May",
    },
    tyupebi: {
      logo: <GeminiIcon />,
      name: TEXTS[language].Gemini,
      date: "22 May - 21 June",
    },
    kirchxibi: {
      logo: <CancerIcon />,
      name: TEXTS[language].Cancer,
      date: "22 June - 22 July",
    },
    lomi: {
      logo: <LeoIcon />,
      name: TEXTS[language].Leo,
      date: "23 July - 23 August",
    },
    qalwuli: {
      logo: <VirgoIcon />,
      name: TEXTS[language].Virgo,
      date: "24 August - 23 September",
    },
    saswori: {
      logo: <LibraIcon />,
      name: TEXTS[language].Libra,
      date: "24 September - 23 October",
    },
    morieli: {
      logo: <ScorpioIcon />,
      name: TEXTS[language].Scorpio,
      date: "24 October - 22 November",
    },
    mshvildosani: {
      logo: <SagittariusIcon />,
      name: TEXTS[language].Sagittarius,
      date: "23 November - 21 December",
    },
    "txis-rqa": {
      logo: <CapricornusIcon />,
      name: TEXTS[language].Capricorn,
      date: "23 November - 21 December",
    },
    merwyuli: {
      logo: <AquariusIcon />,
      name: TEXTS[language].Aquarius,
      date: "21 January - 18 February",
    },
    tevzebi: {
      logo: <PiscesIcon />,
      name: TEXTS[language].Pisces,
      date: "19 February - 20 March",
    },
  };

  const getZodiacDetail = async () => {
    zodiacServices.getZodiacDetail(setZodiac, "general", zodiacName);
    zodiacServices.getZodiacDetail(setZodiac, "love", zodiacName);
    zodiacServices.getZodiacDetail(setZodiac, "finance", zodiacName);
    zodiacServices.getZodiacDetail(setZodiac, "sexual", zodiacName);
  };

  useEffect(() => {
    getZodiacDetail();
  }, []);

  const { love, finance, general, sexual } = zodiac;

  if (zodiacs.filter((el) => el === zodiacName).length === 0)
    return <div>Wrong Page</div>;
  return (
    <>
      <head>
        <title>{zodiacName}</title>
      </head>
      <ZodiacDetails
        logo={zodiacDetails[zodiacName].logo}
        title={zodiacDetails[zodiacName].name}
        date={zodiacDetails[zodiacName].date}
        overview={general?.long}
        career={finance?.finance}
        health={sexual?.sexual}
        love={love?.love}
        matching={general?.short}
        videoSrc={finance?.videoSrc}
      />
    </>
  );
};

export default ZodiacPage;
