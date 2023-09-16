"use client";
import React, { useEffect, useState } from "react";
import SidebarItem from "../__atoms/SidebarItem";
import MainIcon from "@/common/icons/mainIcon";
import CalendarIcon from "@/common/icons/calendarIcon";
import ZodiacIcon from "@/common/icons/zodiacIcon";
import MobileIcon from "@/common/icons/mobileIcon";
import BellIcon from "@/common/icons/bellIcon";
import SettingIcon from "@/common/icons/settingIcon";
import GrayGradient from "@/common/icons/grayGradient";
import ThemeSwitcher from "../__atoms/ThemeSwitcher";
import { useTheme } from "next-themes";
import CurrencyIcon from "@/common/icons/currencyIcon";
import LanguageSwitcher from "../__atoms/LanguageSwitcher";
import SearchIcon from "@/common/icons/searchIcon";
import HamburgerMenuButton from "../__atoms/HamburgerMenuButton";

const Sidebar = () => {
    const [activePage, setActivePage] = useState<string>("main");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const { resolvedTheme } = useTheme();

    // hides body scroll if menu is opened
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMobileMenuOpen]);

    // if screen is bigger than 1024px, IsMobileMenuOpen will become false
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // closes mobile menu in every route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [activePage]);

    return (
        <aside className="md:w-[80px] xxl:w-[120px] h-full md:flex flex-col items-center justify-between md:bg-[#cea9a927] dark:bg-[#355a716b] bg-[#a7aec727] xxl:rounded-[34px] md:rounded-[26px] md:p-[80px_0_40px] pt-[30px] pb-[30px] relative overflow-visible">
            <div className="w-full md:flex flex-col xxl:gap-[25px] md:gap-[20px] h-full">
                <p className="w-full border-b border-b-[#0000004D] text-center pb-[10px] md:text-sm md:inline-block hidden">
                    Weather
                </p>
                <div
                    className={`w-full md:flex md:flex-col md:static md:justify-start md:h-auto gap-2 duration-300 flex flex-col items-center justify-center ${
                        isMobileMenuOpen
                            ? "h-[100vh] absolute top-0 right-0 bg-[#ECEDF1] dark:bg-[#1A2730] z-10 px-[20px]"
                            : "h-[100vh] absolute top-0 right-[-100%]"
                    }`}
                >
                    <SidebarItem
                        href=""
                        text="Home"
                        isMobileMenuOpen={isMobileMenuOpen}
                        Icon={
                            <MainIcon
                                width={0}
                                height={0}
                                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6 w-[26px] h-[26px]"
                                stroke={
                                    resolvedTheme === "light"
                                        ? "black"
                                        : "white"
                                }
                            />
                        }
                        onClick={() => setActivePage("main")}
                        isClicked={activePage === "main"}
                    />
                    <SidebarItem
                        href="horoskopi"
                        text="Horoscope"
                        isMobileMenuOpen={isMobileMenuOpen}
                        Icon={
                            <ZodiacIcon
                                width={0}
                                height={0}
                                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6 w-[26px] h-[26px]"
                                stroke={
                                    resolvedTheme === "light"
                                        ? "black"
                                        : "white"
                                }
                            />
                        }
                        onClick={() => setActivePage("zodiac")}
                        isClicked={activePage === "zodiac"}
                    />
                    <SidebarItem
                        href="notification"
                        text="SMS Notification"
                        isMobileMenuOpen={isMobileMenuOpen}
                        Icon={
                            <MobileIcon
                                width={0}
                                height={0}
                                className="xxl:w-[27px] xxl:h-[35px] md:w-[19px] md:h-[27px] w-[26px] h-[26px]"
                                stroke={
                                    resolvedTheme === "light"
                                        ? "black"
                                        : "white"
                                }
                            />
                        }
                        onClick={() => setActivePage("mobile")}
                        isClicked={activePage === "mobile"}
                    />
                    <SidebarItem
                        href="currency"
                        text="Currency Converter"
                        isMobileMenuOpen={isMobileMenuOpen}
                        Icon={
                            <CurrencyIcon
                                width={0}
                                height={0}
                                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6 w-[26px] h-[26px]"
                                stroke={
                                    resolvedTheme === "light"
                                        ? "black"
                                        : "white"
                                }
                            />
                        }
                        onClick={() => setActivePage("currency")}
                        isClicked={activePage === "currency"}
                    />
                </div>
            </div>
            <div className="flex justify-between px-[25px] md:px-0 md:flex-col md:justify-center flex-row-reverse gap-3 items-center ">
                <div className="flex items-center gap-[10px]">
                    <LanguageSwitcher />
                    <button className="rounded-full xxl:py-2 xxl:px-3 p-3 cursor-pointer md:hidden block">
                        <SearchIcon
                            width={0}
                            height={0}
                            className="md:w-[28px] md:h-[28px] xxl:w-[36px] xxl:h-[36px] w-[26px] h-[26px]"
                            stroke={
                                resolvedTheme === "light" ? "black" : "white"
                            }
                        />
                    </button>
                    <HamburgerMenuButton
                        isMobileMenuOpen={isMobileMenuOpen}
                        setIsMobileMenuOpen={setIsMobileMenuOpen}
                    />
                </div>
                <ThemeSwitcher />
                <SettingIcon
                    width={0}
                    height={0}
                    className="cursor-pointer xxl:w-8 xxl:h-8 md:w-6 md:h-6 md:inline-block hidden"
                    stroke={resolvedTheme === "light" ? "black" : "white"}
                />
            </div>
        </aside>
    );
};

export default Sidebar;
