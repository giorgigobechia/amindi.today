import React, { ReactNode } from "react";

interface ZoidacDetailProps {
  logo: ReactNode;
  title: string;
  overview: string;
  matching: string;
  career: string;
  love: string;
  health: string
}

const ZodiacDetails = ({
  logo,
  title,
  overview,
  matching,
  career,
  health,
  love,
}: ZoidacDetailProps) => {
  return (
    <section className="md:p-[2%] xxl:px-7 xxl:py-5 xxl:rounded-[34px] md:rounded-[26px] bg-[#a7aec727] dark:bg-[#355a716b] w-full relative overflow-hidden flex flex-col xxl:gap-24 md:gap-16">
      <div className="w-full h-full flex gap-[200px] items-center p-[35px_0_35px_10%]">
        <div className="scale-[2.2]">{logo}</div>
        <div className="flex flex-col gap-6 h-full items-start">
          <h1 className="text-[34px]">{title}</h1>
          <p>
            Overview: {overview}
          </p>
          <div className="w-full flex items-center gap-4">
            <div className="w-[50%] grid grid-cols-2 grid-rows-2 gap-6">
              <div className="w-full flex flex-col text-[14px]">
                <p className="text-[16px]">Matching Zodiac</p>
                <p>
                 {matching}
                </p>
              </div>
              <div className="w-full flex flex-col text-[14px]">
                <p className="text-[16px]">Career</p>
                <p>
                  {career}
                </p>
              </div>
              <div className="w-full flex flex-col text-[14px]">
                <p className="text-[16px]">Health</p>
                <p>
                  {health}
                </p>
              </div>
              <div className="w-full flex flex-col text-[14px]">
                <p className="text-[16px]">Love</p>
                <p>
                 {love}
                </p>
              </div>
            </div>
            <div className="w-[400px] h-[225px] bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZodiacDetails;
