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

const Sidebar = () => {
  const [activePage, setActivePage] = useState<string>("main");
  return (
    <aside className="w-[120px] h-full flex flex-col items-center justify-between bg-[#cea9a927] rounded-[34px] p-[80px_0_40px] relative overflow-hidden">
      <div className="w-full flex flex-col gap-[25px]">
        <p className="w-full border-b border-b-[#0000004D] text-center pb-[10px]">
          amindi
        </p>
        <div className="w-full flex flex-col gap-2">
          <SidebarItem
            Icon={<MainIcon width={32} height={32} />}
            onClick={() => setActivePage("main")}
            isClicked={activePage === "main"}
          />
          <SidebarItem
            Icon={<CalendarIcon width={32} height={32} />}
            onClick={() => setActivePage("calendar")}
            isClicked={activePage === "calendar"}
          />
          <SidebarItem
            Icon={<ZodiacIcon width={32} height={32} />}
            onClick={() => setActivePage("zodiac")}
            isClicked={activePage === "zodiac"}
          />
          <SidebarItem
            Icon={<MobileIcon width={27} height={35} />}
            onClick={() => setActivePage("mobile")}
            isClicked={activePage === "mobile"}
          />
          <SidebarItem
            Icon={<BellIcon width={32} height={32} />}
            onClick={() => setActivePage("bell")}
            isClicked={activePage === "bell"}
          />
        </div>
      </div>
      <SettingIcon width={32} height={32} className="cursor-pointer" />
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
