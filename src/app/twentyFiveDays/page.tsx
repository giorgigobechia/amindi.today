import TwentyFiveDays from "@/common/components/__organisms/TwentyFiveDays";
import GrayGradient from "@/common/icons/grayGradient";
import PinkGradient from "@/common/icons/pinkGradient";
import React from "react";

const page = () => {
  return (
    <>
      <head>
        <title>25 days</title>
      </head>
      <section
        id="twenty-fives"
        className="overflow-y-scroll md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative  md:overflow-hidden flex flex-col xxl:gap-24 md:gap-16 "
      >
        <div
          className=" w-full h-full -z-10 hidden md:visible"
          style={{ backdropFilter: "blur(14px)" }}
        ></div>
        <div className=" w-full h-full -z-20 hidden md:visible">
          <PinkGradient
            width={700}
            height={683}
            className="absolute md:right-24 xxl:left-[700px] md:left-[500px] "
          />
          <GrayGradient
            width={508}
            height={400}
            className="absolute xxl:right-[600px] xxl:bottom-[80px] md:right-[400px] md:bottom-[80px]"
          />
        </div>
        <article className="flex w-full h-full items-center justify-between md:px-10 xxl:px-20 flex-col gap-[26px]">
          <h1 className=" bg-gradient-to-b dark:from-blue-400 flex md:hidden text-[30px] from-[#2E386B] dark:to-white bg-clip-text text-transparent  ">
            25 Days<span> Forecast</span>
          </h1>
          <TwentyFiveDays />
        </article>
      </section>
    </>
  );
};

export default page;
