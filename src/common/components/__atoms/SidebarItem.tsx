import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  Icon: ReactNode;
  onClick: () => void;
  isClicked: boolean;
}

const SidebarItem = ({ Icon, onClick, isClicked }: SidebarItemProps) => {
  return (
    <Link
      href={"/"}
      className={`w-full xxl:h-[72px] md:h-[56px] flex justify-center items-center duration-300 hover:bg-custom-gradient hover:border-l-[6px] hover:border-l-black ${
        isClicked ? "bg-custom-gradient border-l-[6px] border-l-black" : ""
      }`}
      onClick={onClick}
    >
      {Icon}
    </Link>
  );
};

export default SidebarItem;
