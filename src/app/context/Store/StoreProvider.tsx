import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { useServices } from "@app/hooks/useServices";
import { AppStore, initStore } from "@app/store/store.ts";

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const services = useServices();
  const [store] = useState<AppStore>(initStore({ services }));

  return <Provider store={store}>{children}</Provider>;
};
