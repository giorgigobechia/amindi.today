import React, { useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/common/context/store";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useGlobalContext();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
        setModalOpen(false);
    };

    return (
        <div className=" relative flex">
            {modalOpen && <div className="overlay" id="overlay"></div>}
            <div
                className="w-6 h-6 rounded-full overflow-hidden position relative"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                <Image
                    width={30}
                    height={30}
                    src={`${
                        language === "ka"
                            ? "/images/geoFlag.png"
                            : language === "en"
                            ? "/images/engFlag.png"
                            : "/images/rusFlag.png"
                    }`}
                    alt=""
                    className="w-full h-full cursor-pointer"
                />
            </div>
            {modalOpen && (
                <div
                    className={`md:h-[100px] md:w-[300px] w-[170px] h-[90px] overflow-hidden flex flex-col absolute z-30 ${
                        language === "ka"
                            ? "md:left-[3.22vw] md:right-[3.22vw] right-[-75px]"
                            : language === "en"
                            ? "md:left-[3.22vw] md:right-[3.22vw] right-[-75px]"
                            : "md:left-[3.22vw] md:right-[3.22vw] right-[-75px]"
                    } md:bottom-[-42px] bottom-[-100px]  md:py-5 py-4 pr-[2vw] justify-between bg-[#ece3e3] dark:bg-[#223743] md:rounded-r-[22px] md:rounded-l-[0px] rounded-[22px] md:bg-custom-gradient-opposite bg-custom-gradient`}
                    onMouseOver={() => setModalOpen(true)}
                    onMouseOut={() => {
                        setModalOpen(false);
                    }}
                >
                    <div
                        className="flex gap-3 cursor-pointer pl-[2vw] hover:border-l-4 dark:border-l-white border-l-black "
                        onClick={() =>
                            handleLanguageChange(
                                `${
                                    language === "en"
                                        ? "ka"
                                        : language === "ru"
                                        ? "en"
                                        : "ru"
                                }`
                            )
                        }
                    >
                        <div className="w-6 h-6">
                            <Image
                                width={30}
                                height={30}
                                src={`${
                                    language === "en"
                                        ? "/images/geoFlag.png"
                                        : language === "ru"
                                        ? "/images/engFlag.png"
                                        : "/images/rusFlag.png"
                                }`}
                                alt=""
                                className="w-full h-full "
                                onMouseOver={() => setModalOpen(true)}
                            />
                        </div>
                        <p>{`${
                            language === "en"
                                ? "Georgian"
                                : language === "ru"
                                ? "Английский"
                                : "რუსული"
                        }`}</p>
                    </div>
                    <div
                        className="flex gap-3 cursor-pointer pl-[2vw] hover:border-l-4 dark:border-l-white border-l-black"
                        onClick={() =>
                            handleLanguageChange(
                                `${
                                    language === "ru"
                                        ? "ka"
                                        : language === "en"
                                        ? "ru"
                                        : "en"
                                }`
                            )
                        }
                    >
                        <div className="w-6 h-6">
                            <Image
                                width={30}
                                height={30}
                                src={`${
                                    language === "ru"
                                        ? "/images/geoFlag.png"
                                        : language === "ka"
                                        ? "/images/engFlag.png"
                                        : "/images/rusFlag.png"
                                }`}
                                alt=""
                                className="w-full h-full"
                                onMouseOver={() => setModalOpen(true)}
                            />
                        </div>
                        <p>{`${
                            language === "ru"
                                ? "грузинский"
                                : language === "en"
                                ? "Russian"
                                : "ინგლისური"
                        }`}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
