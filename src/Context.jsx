import { useEffect, createContext } from "react";

export const Context = createContext();

export const Provider = ({ children }) => {
  //UseEffect
  useEffect(() => {

  }, []);
  
  return <Context.Provider>{children}</Context.Provider>;
};
