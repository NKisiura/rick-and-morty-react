import { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { ConfigProvider } from "@context/Config";
import { NextUIProvider } from "@nextui-org/react";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <ConfigProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <NextUIProvider>{children}</NextUIProvider>
      </BrowserRouter>
    </ConfigProvider>
  );
};
