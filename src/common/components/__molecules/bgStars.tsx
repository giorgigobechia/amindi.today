import GrayGradient from "@/common/icons/grayGradient";
import DesktopRedGradient from "@/common/icons/desktopRedGradient";
import WhiteGradient from "@/common/icons/whiteGradient";
import React from "react";
import MobileRedGradient from "@/common/icons/mobileRedGradient";

function BgStars() {
    return (
        <>
            <GrayGradient
                width={40}
                height={40}
                className="absolute top-[90px] left-[120px]"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[30px] left-[140px]"
            />
            <GrayGradient
                width={40}
                height={40}
                className="absolute top-[70px] left-[240px]"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[150px] left-[300px]"
            />
            <GrayGradient
                width={40}
                height={40}
                className="absolute top-[400px] left-[600px]"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[150px] right-[40px]"
            />
            <GrayGradient
                width={70}
                height={70}
                className="absolute top-[70px] right-[100px]"
            />
            <GrayGradient
                width={80}
                height={80}
                className="absolute top-[100px] right-[300px]"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[70px] right-[490px]"
            />
            <GrayGradient
                width={70}
                height={70}
                className="absolute top-[400px] left-[200px]"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[150px] left-[600px]"
            />
            <GrayGradient
                width={50}
                height={50}
                className="absolute top-[300px] right-[300px]"
            />
            <GrayGradient
                width={70}
                height={70}
                className="absolute top-[350px] left-[250px] md:hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[300px] right-[50px] md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="absolute top-[200px] left-[50px] md:hidden"
            />
            <GrayGradient
                width={70}
                height={70}
                className="absolute top-[800px] left-[250px] md:hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[870px] right-[50px] md:hidden"
            />
            <GrayGradient
                width={50}
                height={50}
                className="absolute top-[840px] left-[100px] md:hidden"
            />
            <GrayGradient
                width={60}
                height={60}
                className="absolute top-[1070px] right-[50px] md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="absolute top-[900px] right-[100px] md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="absolute bottom-[200px] left-[30px] md:hidden"
            />
            <GrayGradient
                width={50}
                height={50}
                className="absolute bottom-[400px] right-[100px] md:hidden"
            />
            <GrayGradient
                width={80}
                height={80}
                className="absolute bottom-[450px] left-[30px] md:hidden"
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
