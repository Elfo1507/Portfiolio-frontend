import React, { createContext, useState } from 'react';
import {iText} from '../Texts/texts'
import { textPT } from '../Texts/texts';

interface AppData {
  language: iText;
  setLanguage: (language: iText) => void;
}

interface iContext {
    children: React.ReactNode
}

export const AppContext = createContext<AppData>({} as AppData);

export const AppProvider: React.FC<iContext> = ({ children }: iContext) => {
  const [language, setLanguage] = useState<iText>(textPT);

  return (
    <AppContext.Provider value={{ language, setLanguage }}>
      {children}
    </AppContext.Provider>
  );
};