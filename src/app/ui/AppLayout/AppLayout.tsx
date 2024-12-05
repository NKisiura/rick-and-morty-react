import { ReactNode } from "react";
import { AppNavbar } from "@ui/AppNavbar";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <AppNavbar />
      <div className="flex-grow">{children}</div>
    </div>
  );
};
