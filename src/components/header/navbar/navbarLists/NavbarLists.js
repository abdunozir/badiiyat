import { Link } from "react-router-dom";

function NavbarLists() {
  return (
    <>
      <ul className="nav__ul">
        <li>
          <Link to="/">Bosh sahifa</Link>
        </li>
        <li>
          <Link to="/Nasr">Nasr</Link>
        </li>
        <li>
          <Link to="/Nazm">Nazm</Link>
        </li>
        <li>
          <Link to="/Maqolalar">Maqolalar</Link>
        </li>
        <li>
          <Link to="/Forum">Forum</Link>
        </li>
      </ul>
    </>
  );
}

export default NavbarLists;
