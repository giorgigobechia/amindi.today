import SingelZodiac from "@/common/components/__molecules/SingleZodiac";
import NotificationForm from "@/common/components/__organisms/NotificationForm";
import GrayGradient from "@/common/icons/grayGradient";
import GreenGradient from "@/common/icons/greenGradient";
import PinkGradient from "@/common/icons/pinkGradient";
import RainingIcon from "@/common/icons/rainingIcon";
import StarIcon from "@/common/icons/starIcon";
import React from "react";

const Notification = () => {
  return (
    <>
      {/* <head>
        <title>notifikacia</title>
      </head>
      <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
        <div
          className="absolute w-full h-full -z-10 "
          style={{ backdropFilter: "blur(14px)" }}
        ></div>
        <div className="absolute w-full h-full -z-20">
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
        <article className="flex w-full h-full items-center justify-between md:px- xxl:px-20">
          <NotificationForm />
          <RainingIcon
            width={0}
            height={0}
            className="md:w-[543px] md:h-[578px] xxl:w-[743px] xxl:h-[778px]"
          />
        </article>
      </section> */}
      <section className="md:px-4 md:py-4 xxl:px-7 xxl:py-5 h-[95vh] xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden xxl:gap-24 md:gap-16 flex justify-center items-center">
        <h2 className="text-[70px] max-[1024px]:text-[25px] max-[425]:text-[15px]">
          Coming Soon
        </h2>
      </section>
    </>
  );
};

export default Notification;
