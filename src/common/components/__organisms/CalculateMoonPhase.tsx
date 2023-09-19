import { useState, useEffect } from "react";
import HighlightUpper from "../__molecules/HighlightUpper";

function getMoonPhaseName(lunarPhase: number) {
  switch (true) {
    case lunarPhase < 0.015:
      return "New Moon";
    case lunarPhase < 0.07:
      return "Waxing Crescent";
    case lunarPhase < 0.15:
      return "First Quarter Waxing Crescent";
    case lunarPhase < 0.23:
      return "First Quarter Half Moon";
    case lunarPhase < 0.31:
      return "Waxing Gibbous";
    case lunarPhase < 0.39:
      return "Last Quarter Waxing Gibbous";
    case lunarPhase < 0.47:
      return "Last Quarter Half Moon";
    default:
      return "Full Moon";
  }
}

function CalculateMoonPhase() {
  const [moonPhase, setMoonPhase] = useState<any>();

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const ym = year + (month - 1) / 12.0;
    const daysSinceNewMoon = (ym - 2000) * 365.25;
    const newMoons = daysSinceNewMoon / 29.53058867;
    const lunarPhase = newMoons - Math.floor(newMoons);

    const phase = getMoonPhaseName(lunarPhase);

    setMoonPhase(phase);
  }, []);

  return (
    <HighlightUpper
      type="moonPhase"
      className="col-start-1 col-end-3 row-start-1 row-end-3"
      moonPhase={moonPhase}
      dataType="მთვარის ფრაზა"
    />
  );
}

export default CalculateMoonPhase;
