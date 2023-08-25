import SingelZodiac from "@/common/components/__molecules/SingleZodiac";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import PinkGradient from "@/common/icons/pinkGradient";
import StarIcon from "@/common/icons/starIcon";
import React from "react";

const Zodiaco = () => {
  return (
    <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
      <div
        className="absolute w-full h-full -z-10 "
        style={{ backdropFilter: "blur(14px)" }}
      ></div>
      <div className="absolute w-full h-full -z-20">
        <PinkGradient
          width={700}
          height={683}
          className="absolute md:right-24 xxl:left-[500px] "
        />
        <GrayGradient
          width={508}
          height={400}
          className="absolute xxl:right-[400px] xxl:bottom-[80px] md:right-[400px] md:bottom-[80px]"
        />
      </div>
      <div className="flex items-center justify-center md:pt-10 xxl:pt-16 relative ">
        <h1 className="text-center md:text-5xl font-light text-[#2E386B] flex flex-col md:gap-4 xxl:gap-6 pl-10">
          Dive Deep into Your <br></br>
          <span
            style={{
              background: "linear-gradient(180deg, #2E386B 0%, #A7A7A7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Celestial Identity
          </span>
        </h1>
        <StarIcon
          width={0}
          height={0}
          className="md:w-[40px] md:h-[40px] relative bottom-16"
        />
        <StarIcon width={0} height={0} className="md:w-[85px] md:h-[85px]" />
      </div>
      <article className="grid grid-cols-2 md:gap-x-4 md:gap-y-14 xxl:gap-x-16 xxl:gap-y-20 gap sm:grid-cols-6 w-[80%] mx-auto ">
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="aries"
          title="Aries"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="taurus"
          title="Taurus"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="gemini"
          title="Gemini"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="cancer"
          title="Cancer"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="leo"
          title="Leo"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="virgo"
          title="Virgo"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="libra"
          title="Libra"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="scorpio"
          title="Scorpio"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="sagittarius"
          title="Sagittarius"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="capricornus"
          title="Capricornus"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="aquarius"
          title="Aquarius"
          onClick={() => console.log("asd")}
        />
        <SingelZodiac
          Icon={
            <StarIcon
              width={0}
              height={0}
              className="md:w-[86px] md:h-[86px] xxl:w-[100px] xxl:h-[100px]"
            />
          }
          href="pisces"
          title="Pisces"
          onClick={() => console.log("asd")}
        />
      </article>
    </section>
  );
};

export default Zodiaco;
