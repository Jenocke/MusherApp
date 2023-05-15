import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="NavBar">
        <Link to={"/mushers"} id="musherNav">
          Registered mushers
        </Link>
        <Link to={"/arrivalsLeg1"} id="arrivals1Nav">
          Arrivals Leg 1
        </Link>
        <Link to={"/arrivalsLeg2"} id="arrivals2Nav">
          Arrivals Leg 2
        </Link>
        <Link to={"/disparencies"} id="disparenciesNav">
          Disparencies detector
        </Link>
      </ul>
    </nav>
  );
};

export { NavBar };
