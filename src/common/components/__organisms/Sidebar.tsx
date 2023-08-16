"use client";
import React, { useState } from "react";
import SidebarItem from "../__atoms/SidebarItem";
import MainIcon from "@/common/icons/mainIcon";
import CalendarIcon from "@/common/icons/calendarIcon";
import ZodiacIcon from "@/common/icons/zodiacIcon";
import MobileIcon from "@/common/icons/mobileIcon";
import BellIcon from "@/common/icons/bellIcon";
import SettingIcon from "@/common/icons/settingIcon";

const Sidebar = () => {
  const [activePage, setActivePage] = useState<string>("main");
  return (
    <aside className="w-[120px] h-full flex flex-col items-center justify-between bg-[#0000000D] rounded-[34px] p-[80px_0_40px]">
      <div className="w-full flex flex-col gap-[25px]">
        <p className="w-full border-b border-b-[#0000004D] text-center pb-[10px]">amindi.today</p>
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
      <SettingIcon width={32} height={32} />
    </aside>
  );
};

export default Sidebar;
