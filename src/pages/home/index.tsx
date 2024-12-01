import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <div>Home page</div>
      <Link to={"/broken-link"}>broken link</Link>
    </div>
  );
};
