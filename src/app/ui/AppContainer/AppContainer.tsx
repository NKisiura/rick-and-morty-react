import { ReactNode } from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { ConfigProvider } from "@app/context/Config";
import { NextUIProvider } from "@nextui-org/react";
import { store } from "@app/store/store.ts";

interface AppContainerProps {
  children: ReactNode;
}

export const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <ConfigProvider>
      <Provider store={store}>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <NextUIProvider>{children}</NextUIProvider>
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  );
};
