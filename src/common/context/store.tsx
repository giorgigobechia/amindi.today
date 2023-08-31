"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
  activePage: string;
  setActivePage: Dispatch<SetStateAction<string>>;
}
const GlobalContext = createContext<ContextProps>({
  activePage: "home",
  setActivePage: () => {},
});

export const GlobalContextProvider = ({ children }: any) => {
  const [activePage, setActivePage] = useState<string>("home");

  return (
    <GlobalContext.Provider
      value={{
        activePage,
        setActivePage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
