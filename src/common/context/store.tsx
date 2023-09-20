"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
  activeCity: string;
  setActiveCity: Dispatch<SetStateAction<string>>;
  language: string;
  setLanguage: (language: string) => void;
  globalTwentyFiveDays: any;
  setGlobalTwentyFiveDays: Dispatch<SetStateAction<any>>;
  globalTodaysWeather: any;
  setGlobalTodaysWeather: Dispatch<SetStateAction<any>>;
  globalTwentyFourHours: any;
  setGlobalTwentyFourHours: Dispatch<SetStateAction<any>>;
}
const GlobalContext = createContext<ContextProps>({
  activePage: "home",
  setActivePage: () => {},
  activeCity: "tbilisi",
  setActiveCity: () => {},
  language: "ka",
  setLanguage: (language: string) => {},
  globalTwentyFiveDays: [],
  setGlobalTwentyFiveDays: () => {},
  globalTodaysWeather: [],
  setGlobalTodaysWeather: () => {},
  globalTwentyFourHours: [],
  setGlobalTwentyFourHours: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<string>("home");
  const [activeCity, setActiveCity] = useState<string>("tbilisi");
  const [language, setLanguage] = useState<string>("ka");
  const [globalTwentyFiveDays, setGlobalTwentyFiveDays] = useState([]);
  const [globalTwentyFourHours, setGlobalTwentyFourHours] = useState([]);
  const [globalTodaysWeather, setGlobalTodaysWeather] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        activePage,
        setActivePage,
        activeCity,
        setActiveCity,
        language,
        setLanguage,
        globalTwentyFiveDays,
        setGlobalTwentyFiveDays,
        globalTodaysWeather,
        setGlobalTodaysWeather,
        globalTwentyFourHours,
        setGlobalTwentyFourHours,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
