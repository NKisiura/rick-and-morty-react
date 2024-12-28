import { Link } from "react-router";

export const Characters = () => {
  console.log("characters page loaded");

  return (
    <div>
      <div>characters page</div>
      <Link to={"1"}> to character details</Link>
    </div>
  );
};

export default Characters;
