import { useLocale } from "next-intl";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  Icon: ReactNode;
  onClick: () => void;
  isClicked: boolean;
  href: string;
}

const SidebarItem = ({ Icon, onClick, isClicked, href }: SidebarItemProps) => {
  const locale = useLocale();
  return (
    <Link
      href={`${locale}/${href}`}
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
