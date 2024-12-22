import { createContext, ReactNode } from "react";

interface Config {
  ghRepoUrl: string;
}

const config: Config = {
  ghRepoUrl: "https://github.com/NKisiura/rick-and-morty-react",
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
