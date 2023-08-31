"use client";
import React from "react";
import NotificationInput from "../__atoms/NotificationInput";
import NotificationSelect from "../__atoms/NotificationSelect";
import CustomCheckbox from "../__atoms/CustomCheckbox";
import NotificationButton from "../__atoms/NotificationButton";
import { useTheme } from "next-themes";

const NotificationForm = () => {
  const { resolvedTheme } = useTheme();
  return (
    <form className="flex flex-col md:gap-5 xxl:gap-8">
      <h1
        className=" md:text-5xl xxl:text-[50px] font-light text-[#2E386B] flex flex-col md:gap-4 xxl:gap-6 mb-2"
        style={{
          background: 'linear-gradient(180deg, "#2E386B" 30%, #A7A7A7 100%)',
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Stay Ahead of the Sky!
      </h1>
      <p className="w-[80%] md:text-base xxl:text-lg">
        Enter your number and get real-time weather updates for your location,
        right on your phone.{" "}
      </p>
      <NotificationInput
        // onChange={(e) => console.log(e)}
        type="text"
        placeholder="Enter phone number"
        min={9}
        max={9}
      />
      <NotificationSelect
        defaultValue="City"
        type="city"
        options={["tbilisi", "sokhumi"]}
        className=""
      />
      <p className="md:text-base xxl:text-lg w-[60%]">
        Choose the types of weather updates you’d like to receive:
      </p>
      <div className="grid grid-cols-2 grid-rows-2 w-[60%] md:gap-2">
        <CustomCheckbox id="rain" label="Rain alerts" />
        <CustomCheckbox id="storm" label="Storm alerts" />
        <CustomCheckbox id="snow" label="Snow alerts" />
        <CustomCheckbox id="wind" label="Wind alerts" />
      </div>
      <NotificationButton type="submit" title="Get Started" />
    </form>
  );
};

export default NotificationForm;
