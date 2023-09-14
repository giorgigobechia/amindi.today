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
  language: string;
  setLanguage: (language: string) => void;
  twentyFiveDays: any;
  setTwentyFiveDays: Dispatch<SetStateAction<any>>;
}
const GlobalContext = createContext<ContextProps>({
  activePage: "home",
  setActivePage: () => {},
  language: "ka",
  setLanguage: (language: string) => {},
  twentyFiveDays: [],
  setTwentyFiveDays: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<string>("home");
  const [language, setLanguage] = useState<string>("ka");
  const [twentyFiveDays, setTwentyFiveDays] = useState();

  return (
    <GlobalContext.Provider
      value={{
        activePage,
        setActivePage,
        language,
        setLanguage,
        twentyFiveDays,
        setTwentyFiveDays,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
