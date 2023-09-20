import GrayGradient from "@/common/icons/grayGradient";
import DesktopRedGradient from "@/common/icons/desktopRedGradient";
import WhiteGradient from "@/common/icons/whiteGradient";
import React from "react";
import MobileRedGradient from "@/common/icons/mobileRedGradient";
import BlueIcon from "@/common/icons/24HourBlueIcon";

function BgStars() {
    return (
        <>
            <GrayGradient
                width={40}
                height={40}
                className="dark:absolute dark:top-[90px] dark:left-[120px] dark:inline-block hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[30px] dark:left-[140px] dark:inline-block hidden"
            />
            <GrayGradient
                width={40}
                height={40}
                className="dark:absolute dark:top-[70px] dark:left-[240px] dark:inline-block hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[150px] dark:left-[300px] dark:inline-block hidden"
            />
            <GrayGradient
                width={40}
                height={40}
                className="dark:absolute dark:top-[400px] dark:left-[600px] dark:inline-block hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[150px] dark:right-[40px] dark:inline-block hidden"
            />
            <GrayGradient
                width={70}
                height={70}
                className="dark:absolute dark:top-[70px] dark:right-[100px] dark:inline-block hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="dark:absolute dark:top-[100px] dark:right-[300px] dark:inline-block hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[70px] dark:right-[490px] dark:inline-block hidden"
            />
            <GrayGradient
                width={70}
                height={70}
                className="dark:absolute dark:top-[400px] dark:left-[200px] dark:inline-block hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[150px] dark:left-[600px] dark:inline-block hidden"
            />
            <GrayGradient
                width={50}
                height={50}
                className="dark:absolute dark:top-[300px] dark:right-[300px] dark:inline-block hidden"
            />
            <GrayGradient
                width={70}
                height={70}
                className="dark:absolute dark:top-[350px] dark:left-[250px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[300px] dark:right-[50px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="dark:absolute dark:top-[200px] dark:left-[50px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={70}
                height={70}
                className="dark:absolute dark:top-[800px] dark:left-[250px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[870px] dark:right-[50px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={50}
                height={50}
                className="dark:absolute dark:top-[840px] dark:left-[100px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="dark:absolute dark:top-[1070px] dark:right-[50px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="dark:absolute dark:top-[900px] dark:right-[100px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="dark:absolute dark:bottom-[200px] dark:left-[30px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={50}
                height={50}
                className="dark:absolute dark:bottom-[400px] dark:right-[100px] dark:inline-block hidden md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="dark:absolute dark:bottom-[450px] dark:left-[30px] dark:inline-block hidden md:hidden"
            />
            <BlueIcon
                width={700}
                height={700}
                className="absolute md:left-[60px] md:bottom-[-150px] bottom-0 z-[-5] dark:hidden"
            />
            <WhiteGradient
                width={700}
                height={700}
                className="absolute left-[60px] bottom-[0px] z-[-5] md:inline-block hidden"
            />
            <MobileRedGradient
                width={300}
                height={300}
                className="absolute left-[-80px] top-[300px] z-[-5] md:hidden inline-block"
            />
            <DesktopRedGradient
                width={750}
                height={750}
                className="absolute md:left-[500px] md:top-[-50px] top-[300px] right-[400px] z-[-5] w-[300px] h-[300px] md:w-[750px] md:h-[750px] md:inline-block hidden"
            />
        </>
    );
}

export default BgStars;
