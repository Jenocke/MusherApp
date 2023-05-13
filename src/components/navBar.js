import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="NavBar">
        <Link to={"/mushers"}>Registered mushers</Link>
        <Link to={"/arrivalsLeg1"}>Arrivals Leg 1</Link>
        <Link to={"/arrivalsLeg2"}>Arrivals Leg 2</Link>
        <Link to={"/disparencies"}>Disparencies detector</Link>
      </ul>
    </nav>
  );
};

export { NavBar };
