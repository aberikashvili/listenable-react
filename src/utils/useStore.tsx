import { createContext, useContext, useState } from "react";
import { CssBaseline } from "@mui/material";

type StoreContextProps = {
  currectPage: string;
  setCurrectPage: (page: string) => void;
  isThemeChange: boolean;
  setIsThemeChange: (themeChange: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const StoreContext = createContext({} as StoreContextProps);

export const useStore = (): StoreContextProps => useContext(StoreContext);

type StorProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: StorProps) => {
  const [currectPage, setCurrectPage] = useState("dashboard");
  const [isThemeChange, setIsThemeChange] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const store = {
    currectPage,
    setCurrectPage,
    isThemeChange,
    setIsThemeChange,
    isOpen,
    setIsOpen,
  };

  return (
    <StoreContext.Provider value={store}>
      <CssBaseline />
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
