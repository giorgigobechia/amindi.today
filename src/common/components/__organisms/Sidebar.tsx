"use client";
import React, { useState } from "react";
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

const Sidebar = () => {
  const [activePage, setActivePage] = useState<string>("main");
  const { resolvedTheme } = useTheme();
  return (
    <aside className="hidden md:w-[80px] xxl:w-[120px] h-full md:flex flex-col items-center justify-between  bg-[#cea9a927] dark:bg-[#355a716b] xxl:rounded-[34px] md:rounded-[26px] p-[80px_0_40px] relative overflow-visible">
      <div className="w-full flex flex-col xxl:gap-[25px] md:gap-[20px]">
        <p className="w-full border-b border-b-[#0000004D] text-center pb-[10px] md:text-sm">
          AMINDI.TODAY
        </p>
        <div className="w-full flex flex-col gap-2">
          <SidebarItem
            href=""
            Icon={
              <MainIcon
                width={0}
                height={0}
                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6"
                stroke={resolvedTheme === "light" ? "black" : "white"}
              />
            }
            onClick={() => setActivePage("main")}
            isClicked={activePage === "main"}
          />
          <SidebarItem
            href="horoskopi"
            Icon={
              <ZodiacIcon
                width={0}
                height={0}
                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6"
                stroke={resolvedTheme === "light" ? "black" : "white"}
              />
            }
            onClick={() => setActivePage("zodiac")}
            isClicked={activePage === "zodiac"}
          />
          <SidebarItem
            href="notification"
            Icon={
              <MobileIcon
                width={0}
                height={0}
                className="xxl:w-[27px] xxl:h-[35px] md:w-[19px] md:h-[27px]"
                stroke={resolvedTheme === "light" ? "black" : "white"}
              />
            }
            onClick={() => setActivePage("mobile")}
            isClicked={activePage === "mobile"}
          />
          <SidebarItem
            href="currency"
            Icon={
              <CurrencyIcon
                width={0}
                height={0}
                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6"
                stroke={resolvedTheme === "light" ? "black" : "white"}
              />
            }
            onClick={() => setActivePage("currency")}
            isClicked={activePage === "currency"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 items-center justify-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
        <SettingIcon
          width={0}
          height={0}
          className="cursor-pointer xxl:w-8 xxl:h-8 md:w-6 md:h-6"
          stroke={resolvedTheme === "light" ? "black" : "white"}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
