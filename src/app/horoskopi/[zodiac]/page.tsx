"use client";
import ZodiacDetails from "@/common/components/__organisms/ZodiacDetails";
import React, { useState, useEffect, ReactNode } from "react";
// import { horoscopes } from "@/common/components/__organisms/Horoskops";
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
import Api from "@/common/services/api";

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

const page = ({ params }: props) => {
    const [zodiac, setZodiac] = useState<any>({ love: "" });
    const zodiacName: string = params.zodiac;
    const zodiacDetails: any = {
        verdzi: {
            logo: <AriesIcon />,
            name: "Aries",
            date: "21 March - 20 April",
        },
        kuro: {
            logo: <TaurusIcon />,
            name: "Taurus",
            date: "21 April - 21 May",
        },
        tyupebi: {
            logo: <GeminiIcon />,
            name: "Gemini",
            date: "22 May - 21 June",
        },
        kirchxibi: {
            logo: <CancerIcon />,
            name: "Cancer",
            date: "22 June - 22 July",
        },
        lomi: {
            logo: <LeoIcon />,
            name: "Leo",
            date: "23 July - 23 August",
        },
        qalwuli: {
            logo: <VirgoIcon />,
            name: "Virgo",
            date: "24 August - 23 September",
        },
        saswori: {
            logo: <LibraIcon />,
            name: "Libra",
            date: "24 September - 23 October",
        },
        morieli: {
            logo: <ScorpioIcon />,
            name: "Scorpio",
            date: "24 October - 22 November",
        },
        mshvildosani: {
            logo: <SagittariusIcon />,
            name: "Sagittarius",
            date: "23 November - 21 December",
        },
        "txis-rqa": {
            logo: <CapricornusIcon />,
            name: "Capricornus",
            date: "23 November - 21 December",
        },
        merwyuli: {
            logo: <AquariusIcon />,
            name: "Aquarius",
            date: "21 January - 18 February",
        },
        tevzebi: {
            logo: <PiscesIcon />,
            name: "Pisces",
            date: "19 February - 20 March",
        },
    };
    const getZodiacDetail = async (detail: string) => {
        const data = await Api.sendRequest(
            `${zodiacName}/${detail}`,
            "GET",
            detail
        );
        setZodiac((prev: any) => ({ ...prev, [detail]: data.response }));
    };

    useEffect(() => {
        getZodiacDetail("general");
        getZodiacDetail("love");
        getZodiacDetail("finance");
        getZodiacDetail("sexual");
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
                title={`${zodiacDetails[zodiacName].name} (${zodiacDetails[zodiacName].date})`}
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

export default page;
