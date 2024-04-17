import { createContext, useContext, useState } from "react";

export const langContext = createContext();

export const useLang = () => {
  const value = useContext(langContext);
  return value;
};

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const changeLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <langContext.Provider value={{ lang, changeLang }}>
      {children}
    </langContext.Provider>
  );
};
