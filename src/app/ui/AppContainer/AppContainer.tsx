import { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { HeroUIProvider } from "@heroui/react";
import { ConfigProvider } from "@app/context/Config";
import { ServicesProvider } from "@app/context/Services";
import { StoreProvider } from "@app/context/Store/StoreProvider.tsx";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <ConfigProvider>
      <ServicesProvider>
        <StoreProvider>
          <BrowserRouter basename={import.meta.env.BASE_URL}>
            <HeroUIProvider>{children}</HeroUIProvider>
          </BrowserRouter>
        </StoreProvider>
      </ServicesProvider>
    </ConfigProvider>
  );
};
