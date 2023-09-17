import React, { useState } from "react";
import Image from "next/image";
import { useGlobalContext } from "@/common/context/store";

const LanguageSwitcher = () => {
    const { language, setLanguage } = useGlobalContext();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [isOverlayVisible, setOverlayVisible] = useState<boolean>(false);
    const handleLanguageChange = (newLanguage: string) => {
        setLanguage(newLanguage);
        setModalOpen(false);
        setOverlayVisible(false);
    };

    return (
        <div className=" relative flex">
             {isOverlayVisible && <div className="overlay" id="overlay"></div>}
            <div
                className="w-6 h-6 rounded-full overflow-hidden position relative"
                onClick={() => {
                    setModalOpen(true);
                    setOverlayVisible(true);
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
                    className={`h-[100px] w-[300px] overflow-hidden flex flex-col absolute z-30 ${
                        language === "ka"
                            ? "left-[3.22vw]"
                            : language === "en"
                            ? "left-[3.22vw]"
                            : "left-[3.22vw]"
                    } bottom-[-42px] py-5 pr-[2vw] justify-between bg-[#ece3e3] dark:bg-[#223743] rounded-r-[22px] bg-custom-gradient-opposite`}
                    onMouseOver={() => setModalOpen(true)}
                    onMouseOut={() => setModalOpen(false)}
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
