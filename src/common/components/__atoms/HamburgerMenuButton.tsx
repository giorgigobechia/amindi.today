import React from "react";

interface HamburgerMenuProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (value: React.SetStateAction<boolean>) => void;
}

function HamburgerMenuButton({
    isMobileMenuOpen,
    setIsMobileMenuOpen,
}: HamburgerMenuProps) {
    const genericHamburgerLine = `h-[1.5px] w-[27px] my-[3.5px] duration-500 rounded-full transition ease transform`;

    return (
        <button
            className="flex flex-col md:hidden h-[26px] w-[26px] rounded justify-center items-center group relative z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
            <div
                className={`${genericHamburgerLine} dark:bg-white bg-black ${
                    isMobileMenuOpen && "rotate-45 translate-y-[8.53px]"
                }`}
            />
            <div
                className={`${genericHamburgerLine} dark:bg-white bg-black ${
                    isMobileMenuOpen && "opacity-0"
                }`}
            />
            <div
                className={`${genericHamburgerLine} dark:bg-white bg-black ${
                    isMobileMenuOpen && "-rotate-45 -translate-y-[8.53px] "
                }`}
            />
        </button>
    );
}

export default HamburgerMenuButton;
