import { createContext, useContext } from "react";
import { App } from "obsidian";

export const AppContext = createContext<App | null>(null);

export const useApp = () => {
  const app = useContext(AppContext);
  if (!app) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return app;
};
