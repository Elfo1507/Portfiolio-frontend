import React, { createContext, useEffect, useState } from "react";
import { iText } from "../Texts/texts";
import { textPT } from "../Texts/texts";

interface AppData {
  language: iText;
  setLanguage: (language: iText) => void;
  screenSize: string;
}

interface iContext {
  children: React.ReactNode;
}

export const AppContext = createContext<AppData>({} as AppData);

export const AppProvider: React.FC<iContext> = ({ children }: iContext) => {
  const [language, setLanguage] = useState<iText>(textPT);
  const [screenSize, setScreenSize] = useState<string>("");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setScreenSize("small");
      } else if (width < 1024) {
        setScreenSize("medium");
      } else {
        setScreenSize("big");
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <AppContext.Provider value={{ language, setLanguage, screenSize }}>
      {children}
    </AppContext.Provider>
  );
};
