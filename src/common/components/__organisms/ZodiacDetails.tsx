import React, { ReactNode } from "react";

interface ZoidacDetailProps {
    logo: ReactNode;
    title: string;
    overview: string;
    matching: string;
    career: string;
    love: string;
    health: string;
    videoSrc: string;
}

const ZodiacDetails = ({
    logo,
    title,
    overview,
    matching,
    career,
    health,
    love,
    videoSrc,
}: ZoidacDetailProps) => {
    return (
        <section className="md:p-[2%] xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
            <div className="w-full h-full md:flex md:flex-row flex flex-col md:gap-[200px] gap-[40px] items-center md:p-[35px_10px_35px_10%] p-[35px_25px_35px_25px] overflow-scroll">
                <div className="md:scale-[2.2] scale-[1.1]">{logo}</div>
                <div className="flex flex-col gap-6 h-full md:items-start md:text-left items-center text-center">
                    <h1 className="text-[34px]">{title}</h1>
                    <p>Overview: {overview}</p>
                    <div className="w-full flex flex-col md:flex-row items-center md:gap-4 gap-[30px]">
                        <div className="md:w-[50%] w-[80%] grid md:grid-cols-2 grid-cols-1 md:grid-rows-2 gap-6 ">
                            <div className="w-full flex flex-col text-[14px]">
                                <p className="text-[16px]">Matching Zodiac</p>
                                <p>{matching}</p>
                            </div>
                            <div className="w-full flex flex-col text-[14px]">
                                <p className="text-[16px]">Career</p>
                                <p>{career}</p>
                            </div>
                            <div className="w-full flex flex-col text-[14px]">
                                <p className="text-[16px]">Health</p>
                                <p>{health}</p>
                            </div>
                            <div className="w-full flex flex-col text-[14px]">
                                <p className="text-[16px]">Love</p>
                                <p>{love}</p>
                            </div>
                        </div>
                        <div className="max-w-[400px] w-full h-[225px] ">
                            <iframe
                                allowFullScreen
                                src={videoSrc}
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ZodiacDetails;
