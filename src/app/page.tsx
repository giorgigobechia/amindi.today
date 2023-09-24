"use client";
import dynamic from "next/dynamic";
import Prognozi from "./prognozi/[city]/page";
import { useEffect } from "react";

const WeatherToday = dynamic(
  () => import("@/common/components/__organisms/WeatherToday"),
  { ssr: false }
);

export default function Home() {
  return <Prognozi />;
}
