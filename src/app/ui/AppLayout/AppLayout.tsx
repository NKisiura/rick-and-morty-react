import { ReactNode } from "react";
import { Link, NavLink } from "react-router";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={"flex flex-col"}>
      <div className={"flex gap-10"}>
        {/*header will be here*/}
        <Link to={"/home"}>LOGO</Link>
        <NavLink to={"/characters"}>Characters page</NavLink>
        <NavLink to={"/locations"}>Locations page</NavLink>
      </div>
      {children}
    </div>
  );
};
