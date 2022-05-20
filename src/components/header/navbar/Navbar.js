import NavbarLists from "./navbarLists/NavbarLists";
import Avatar from "@mui/material/Avatar";
import avatar from "../../../assets/images/userAccountImage.jpg";

function Navbar() {
  return (
    <nav>
      <div className="nav__container">
        <h1 className="nav__logo">Badiiyat</h1>
        <div className="nav__right">
          <NavbarLists />
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 56, height: 56 }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
