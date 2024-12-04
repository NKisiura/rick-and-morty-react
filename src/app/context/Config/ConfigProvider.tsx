import { createContext, ReactNode } from "react";

interface Config {
  apiUrl: string;
}

const config: Config = {
  apiUrl: "https://rickandmortyapi.com/api",
};

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigContext = createContext<Config>(config);

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  return (
    <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
  );
};
