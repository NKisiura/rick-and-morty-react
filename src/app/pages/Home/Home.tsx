import { Link } from "react-router";

export const Home = () => {
  return (
    <div>
      <div>Home page</div>
      <Link to={"/broken-link"}>broken link</Link>
    </div>
  );
};
