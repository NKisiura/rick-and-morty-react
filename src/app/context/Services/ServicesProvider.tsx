import { createContext, ReactNode, useState } from "react";
import { AxiosHttpClient } from "@shared/http-client";
import { useConfig } from "@app/hooks/useConfig";

import { CharactersService } from "@features/characters/services";

interface Services {
  charactersService: CharactersService;
}

interface ServicesProviderProps {
  children: ReactNode;
}

const initServices = (apiBaseUrl: string): Services => {
  const httpClient = new AxiosHttpClient(apiBaseUrl);

  const charactersService = new CharactersService(httpClient);

  return {
    charactersService,
  };
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const ServicesContext = createContext<Services>(undefined!);

export const ServicesProvider = ({ children }: ServicesProviderProps) => {
  const { apiBaseUrl } = useConfig();
  const [services] = useState<Services>(initServices(apiBaseUrl));

  return (
    <ServicesContext.Provider value={services}>
      {children}
    </ServicesContext.Provider>
  );
};
