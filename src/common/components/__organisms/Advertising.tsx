import GreenGradient from "@/common/icons/greenGradient";
import React from "react";

const Advertising = () => {
  return (
    <section className="flex flex-col gap-3 xxl:rounded-[34px] md:rounded-[26px] w-[70%] h-full justify-between">
      <h1 className="xxl:text-[20px] md:text-lg pl-[10px] h-[8%]">
        Advertising
      </h1>
      <div className="bg-[#cea9a927] dark:bg-[#355a7145] relative w-full h-[92%] overflow-hidden rounded-[34px] p-[20px] flex gap-3">
        <div
          className="absolute w-full h-full -z-10"
          style={{ backdropFilter: "blur(14px)" }}
        ></div>
        <GreenGradient
          width={500}
          height={500}
          className="absolute left-[-90px] top-[-60px] rotate-45 -z-20"
        />
        <div className="h-full flex-1 bg-[#6f575727] rounded-[18px]"></div>
        <div className="h-full flex-1 bg-[#6f575727] rounded-[18px]"></div>
        <div className="h-full flex-1 bg-[#6f575727] rounded-[18px]"></div>
        <div className="h-full flex-1 bg-[#6f575727] rounded-[18px]"></div>
      </div>
    </section>
  );
};

export default Advertising;
