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
import { useGlobalContext } from "@/common/context/store";
import TEXTS from "@/languages/Languages";

const Horoskops = () => {
    const { language } = useGlobalContext();
    const horoscopes = [
        {
            logo: <AriesIcon />,
            name: TEXTS[language].Aries,
            path: "verdzi",
            date: "21 March - 20 April",
        },
        {
            logo: <TaurusIcon />,
            name: TEXTS[language].Taurus,
            path: "kuro",
            date: "21 April - 21 May",
        },
        {
            logo: <GeminiIcon />,
            name: TEXTS[language].Gemini,
            path: "tyupebi",
            date: "22 May - 21 June",
        },
        {
            logo: <CancerIcon />,
            name: TEXTS[language].Cancer,
            path: "kirchxibi",
            date: "22 June - 22 July",
        },
        {
            logo: <LeoIcon />,
            name: TEXTS[language].Leo,
            path: "lomi",
            date: "23 July - 23 August",
        },
        {
            logo: <VirgoIcon />,
            name: TEXTS[language].Virgo,
            path: "qalwuli",
            date: "24 August - 23 September",
        },
        {
            logo: <LibraIcon />,
            name: TEXTS[language].Libra,
            path: "saswori",
            date: "24 September - 23 October",
        },
        {
            logo: <ScorpioIcon />,
            name: TEXTS[language].Scorpio,
            path: "morieli",
            date: "24 October - 22 November",
        },
        {
            logo: <SagittariusIcon />,
            name: TEXTS[language].Sagittarius,
            path: "mshvildosani",
            date: "23 November - 21 December",
        },
        {
            logo: <CapricornusIcon />,
            name: TEXTS[language].Capricorn,
            path: "txis-rqa",
            date: "23 November - 21 December",
        },
        {
            logo: <AquariusIcon />,
            name: TEXTS[language].Aquarius,
            path: "merwyuli",
            date: "21 January - 18 February",
        },
        {
            logo: <PiscesIcon />,
            name: TEXTS[language].Pisces,
            path: "tevzebi",
            date: "19 February - 20 March",
        },
    ];

    return (
        <article className="grid grid-cols-2 md:gap-x-20 xxl:gap-x-16 xxl:gap-y-20 gap-y-[50px] md:gap-y-20 sm:grid-cols-3 sm:gap-y-[40px] md:grid-cols-4 lg:grid-cols-6 w-[80%] mx-auto ">
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
