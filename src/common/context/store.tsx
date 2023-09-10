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
}
const GlobalContext = createContext<ContextProps>({
  activePage: "home",
  setActivePage: () => {},
  language: "ka",
  setLanguage: (language: string) => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<string>("home");
  const [language, setLanguage] = useState<string>("ka");

  return (
    <GlobalContext.Provider
      value={{
        activePage,
        setActivePage,
        language,
        setLanguage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
