import { Link } from "react-router";

export const Home = () => {
  return (
    <div className="container py-4">
      <div>Home page</div>
      <Link to={"/broken-link"}>broken link</Link>
    </div>
  );
};
