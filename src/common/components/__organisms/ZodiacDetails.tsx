import React, { ReactNode } from "react";

interface ZoidacDetailProps {
  logo: ReactNode;
  title: string;
  overview: string;
  matching: string;
  todaysRating: string;
  career: string;
  luckyNumber: string;
  love: string;
}

const ZodiacDetails = ({
  logo,
  title,
  overview,
  matching,
  todaysRating,
  career,
  luckyNumber,
  love,
}: ZoidacDetailProps) => {
  return (
    <section className="md:p-[2%] xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
      <div className="w-full h-full flex gap-[200px] items-center p-[55px_15%]">
        <div className="scale-[2.2]">{logo}</div>
        <div className="flex flex-col gap-6 h-full items-start">
          <h1 className="text-[34px]">{title}</h1>
          <p className="text-[14px]">Overview: {overview}</p>
        </div>
      </div>
    </section>
  );
};

export default ZodiacDetails;
