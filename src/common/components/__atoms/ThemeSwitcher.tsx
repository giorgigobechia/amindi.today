"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import ThemeMoonIcon from "@/common/icons/themeMoonIcon";
import ThemeSunIcon from "@/common/icons/themeSunIcon";

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const currentTheme = resolvedTheme === "system" ? "light" : resolvedTheme;

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        if (resolvedTheme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="md:w-[52px] md:h-[26px] xxl:w-[66px] xxl:h-[30px] w-[84px] h-[38px] md:rounded-2xl rounded-[20px] bg-[#70707033] dark:bg-[#a8a5a567] relative p-1 flex items-center cursor-pointer"
            onClick={toggleTheme}
        >
            <div
                className={`md:w-[20px] md:h-[20px] xxl:w-6 xxl:h-6 w-[30px] h-[30px] p-1 flex bg-white dark:bg-[#2B404F] rounded-full absolute  ${
                    resolvedTheme === "light"
                        ? "left-1"
                        : "xxl:left-10 md:left-7 left-[50px]"
                } transition-all duration-300`}
            >
                {resolvedTheme === "dark" ? (
                    <ThemeSunIcon
                        width={0}
                        height={0}
                        className="w-full h-full"
                    />
                ) : (
                    <ThemeMoonIcon
                        width={0}
                        height={0}
                        className="w-full h-full"
                    />
                )}
            </div>
        </div>
    );
};

export default ThemeSwitcher;
