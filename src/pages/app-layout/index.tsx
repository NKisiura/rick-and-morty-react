import { Link, NavLink, Outlet } from "react-router";

export const AppLayout = () => {
  return (
    <div className={"flex flex-col"}>
      <div className={"flex gap-10"}>
        {/*header will be here*/}
        <Link to={"/"}>LOGO</Link>
        <NavLink to={"/characters"}>Characters page</NavLink>
        <NavLink to={"/locations"}>Locations page</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
