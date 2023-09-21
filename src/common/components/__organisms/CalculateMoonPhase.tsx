import { useState, useEffect } from "react";
import HighlightUpper from "../__molecules/HighlightUpper";
import TEXTS from "@/languages/Languages";
import { useGlobalContext } from "@/common/context/store";

function getMoonPhaseName(phase: number) {
  switch (true) {
    case phase < 1:
      return "New Moon";
    case phase < 7.4:
      return "Waxing Crescent";
    case phase < 14.8:
      return "First Quarter Waxing Crescent";
    case phase < 22.1:
      return "First Quarter Half Moon";
    case phase < 29.5:
    default:
      return "Full Moon";
  }
}

function CalculateMoonPhase() {
  const [moonPhase, setMoonPhase] = useState<string>("");
  const { language } = useGlobalContext();

  useEffect(() => {
    let now = new Date();
    const newMoon = new Date("2023-09-14");
    const phaseLength = 29.53058867;
    const daysSinceNewMoon =
      (now.getTime() - newMoon.getTime()) / 1000 / 60 / 60 / 24;
    const phaseDays = daysSinceNewMoon % phaseLength;

    const phaseName = getMoonPhaseName(phaseDays);
    setMoonPhase(phaseName);
  }, []);

  return (
    <HighlightUpper
      type="moonPhase"
      className="col-start-1 col-end-3 row-start-1 row-end-3"
      moonPhase={moonPhase}
      dataType={TEXTS[language].moonPhase}
    />
  );
}

export default CalculateMoonPhase;
