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

const Sidebar = () => {
  const [activePage, setActivePage] = useState<string>("main");
  return (
    <aside className="md:w-[80px] xxl:w-[120px] h-full flex flex-col items-center justify-between  bg-[#cea9a927] dark:bg-[#355a716b] xxl:rounded-[34px] md:rounded-[26px] p-[80px_0_40px] relative overflow-hidden">
      <div className="w-full flex flex-col xxl:gap-[25px] md:gap-[20px]">
        <p className="w-full border-b border-b-[#0000004D] text-center pb-[10px] md:text-sm">
          Weather
        </p>
        <div className="w-full flex flex-col gap-2">
          <SidebarItem
            href=""
            Icon={
              <MainIcon
                width={0}
                height={0}
                className="xxl:w-8 xxl:h-8 md:w-6 md:h-6"
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
              />
            }
            onClick={() => setActivePage("mobile")}
            isClicked={activePage === "mobile"}
          />
        </div>
      </div>
      <ThemeSwitcher />
      <SettingIcon
        width={0}
        height={0}
        className="cursor-pointer xxl:w-8 xxl:h-8 md:w-6 md:h-6"
      />
      <div
        className="absolute w-full h-full -z-10 "
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div
        className="absolute w-full h-full -z-20"
        style={{ backdropFilter: "blur(14px)" }}
      >
        <GrayGradient
          height={600}
          width={500}
          className="absolute bottom-[-100px] left-[-60px] "
        />
      </div>
    </aside>
  );
};

export default Sidebar;
