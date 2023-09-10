"use client";
import React from "react";
import NotificationInput from "../__atoms/NotificationInput";
import NotificationSelect from "../__atoms/NotificationSelect";
import CustomCheckbox from "../__atoms/CustomCheckbox";
import NotificationButton from "../__atoms/NotificationButton";
import { useTheme } from "next-themes";
import TEXTS from "@/languages/Languages";
import { useGlobalContext } from "@/common/context/store";

const NotificationForm = () => {
  const { language } = useGlobalContext();
  return (
    <form className="flex flex-col md:gap-5 xxl:gap-8">
      <h1 className="md:text-5xl xxl:text-[50px] bg-gradient-to-b dark:from-blue-400  from-[#2E386B] dark:to-white bg-clip-text text-transparent text-7xl font-$font">
        Stay Ahead of the Sky!
      </h1>

      <p className="w-[80%] md:text-base xxl:text-lg">
        {TEXTS[language].weatherUpdates}
      </p>
      <NotificationInput
        // onChange={(e) => console.log(e)}
        type="text"
        placeholder={TEXTS[language].enterPhone}
        min={9}
        max={9}
      />
      <NotificationSelect
        defaultValue={TEXTS[language].city}
        type="city"
        options={["tbilisi", "sokhumi"]}
        className=""
      />
      <p className="md:text-base xxl:text-lg w-[60%]">
        {TEXTS[language].chooseTheTypes}
      </p>
      <div className="grid grid-cols-2 grid-rows-2 w-[60%] md:gap-2">
        <CustomCheckbox
          id="rain"
          label={`${TEXTS[language].rain} ${TEXTS[language].alert}`}
        />
        <CustomCheckbox
          id="storm"
          label={`${TEXTS[language].storm} ${TEXTS[language].alert}`}
        />
        <CustomCheckbox
          id="snow"
          label={`${TEXTS[language].snow} ${TEXTS[language].alert}`}
        />
        <CustomCheckbox
          id="wind"
          label={`${TEXTS[language].wind} ${TEXTS[language].alert}`}
        />
      </div>
      <NotificationButton type="submit" title={TEXTS[language].submit} />
    </form>
  );
};

export default NotificationForm;
