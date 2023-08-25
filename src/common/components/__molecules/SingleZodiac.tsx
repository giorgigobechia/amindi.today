// import { useLocale } from "next-intl";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
  Icon: ReactNode;
  onClick: () => void;
  title: string;
  href: string;
}

const SingelZodiac = ({ Icon, onClick, title, href }: SidebarItemProps) => {
  // const locale = useLocale();
  return (
    <Link
      href={`/${href}`}
      className="flex flex-col md:gap-6 justify-center items-center transition-transform transform-gpu hover:scale-105"
    >
      {Icon}
      <p className="md:text-xl">{title}</p>
    </Link>
  );
};

export default SingelZodiac;
