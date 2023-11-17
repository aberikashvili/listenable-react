import { createContext, useContext, useState } from "react";
import { CssBaseline } from "@mui/material";
import { PopEpisodes } from "../../components/Demographics/PopEpisodes";

type StoreContextProps = {
  currectPage: string;
  setCurrectPage: (page: string) => void;
  isThemeChange: boolean;
  setIsThemeChange: (themeChange: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  popEpisodes: PopEpisodes[];
  setPopEpisodes: (open: boolean) => void;
  popSegments: PopEpisodes[];
  setPopSegments: (open: boolean) => void;
};

export const StoreContext = createContext({} as StoreContextProps);

export const useStore = (): StoreContextProps => useContext(StoreContext);

type StorProps = {
  children: React.ReactNode;
};

const StoreProvider = ({ children }: StorProps) => {
  const [currectPage, setCurrectPage] = useState("dashboard");
  const [popEpisodes, setPopEpisodes] = useState([]);
  const [popSegments, setPopSegments] = useState([]);
  const [isThemeChange, setIsThemeChange] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const store = {
    currectPage,
    setCurrectPage,
    isThemeChange,
    setIsThemeChange,
    isOpen,
    setIsOpen,
    popEpisodes,
    setPopEpisodes,
    popSegments,
    setPopSegments,
  };

  return (
    <StoreContext.Provider value={store}>
      <CssBaseline />
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
