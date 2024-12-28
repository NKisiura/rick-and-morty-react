import { Link } from "react-router";

export const Locations = () => {
  console.log("locations page loaded");

  return (
    <div>
      <div>locations page</div>
      <Link to={"1"}>to locations details</Link>
    </div>
  );
};

export default Locations;
