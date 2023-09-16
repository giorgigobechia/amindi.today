// import { useLocale } from "next-intl";
import Link from "next/link";
import React, { ReactNode } from "react";

interface SidebarItemProps {
    Icon: ReactNode;
    onClick: () => void;
    isClicked: boolean;
    isMobileMenuOpen: boolean;
    href: string;
    text: string;
}

const SidebarItem = ({
    Icon,
    onClick,
    isClicked,
    isMobileMenuOpen,
    href,
    text,
}: SidebarItemProps) => {
    return (
        <Link
            href={`/${href}`}
            className={`w-full xxl:h-[72px] md:h-[56px] flex items-center duration-300 hover:bg-custom-gradient hover:border-l-[6px] hover:border-l-black dark:hover:border-l-white ${
                isClicked &&
                "bg-custom-gradient border-l-[6px] border-l-black dark:border-l-white"
            } ${
                isMobileMenuOpen
                    ? "max-w-[400px] justify-start gap-[30px] py-[20px] px-[15px]"
                    : "justify-center gap-[30px] py-[20px] px-[15px]"
            }`}
            onClick={onClick}
        >
            {Icon} {isMobileMenuOpen && text}
        </Link>
    );
};

export default SidebarItem;
