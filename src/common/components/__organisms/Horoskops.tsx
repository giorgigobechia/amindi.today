import React from "react";
import SingelZodiac from "@/common/components/__molecules/SingleZodiac";
import StarIcon from "@/common/icons/starIcon";

const Horoskops = () => {
  return (
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
  );
};

export default Horoskops;
