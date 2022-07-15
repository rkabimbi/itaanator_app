import "./NavBar.sass";
import  logoBFS from "../../assets/images/LogoBFS.jpeg"
import { Link } from "react-router-dom";

import * as React from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import EuroIcon from "@mui/icons-material/Euro";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import GridViewIcon from "@mui/icons-material/GridView";

export default function NavBar() {
  const [menuToggle, setMenuToggle] = useState(false);

  const toggleMenu = () => {
    setMenuToggle(!menuToggle);
    console.log(menuToggle);
  };

  return (
    <div className={menuToggle?"side-navBar":"side-navBar-reduit"}>
      <a className="logo-navBar" href="#" onClick={toggleMenu}>
        {menuToggle ? (
            <img className="BFSLogo" src={logoBFS} />
          ) 
          :(
            <MenuIcon className="menuIcone" />
          )
        }
      </a>

      <div className="menu-navBar">
        {menuToggle ? (
          <ul className="nav-link">
            <li>
              <GridViewIcon fontSize="large"/> <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <EuroIcon fontSize="large"/> <Link to="/budget">Budget</Link>
            </li>
            <li>
              <DescriptionIcon fontSize="large"/> <Link to="/documentation">Documentation</Link>
            </li>
            <li>
              <LogoutIcon fontSize="large"/>
              <Link to="/deconnexion">Deconnexion</Link>
            </li>
          </ul>
        ) : (
          <ul className="nav-link-reduit">
            <li>
              <Link to="/dashboard">
                <GridViewIcon fontSize="large" />
              </Link>
            </li>
            <li>
              <Link to="/budget">
                <EuroIcon fontSize="large"/>
              </Link>
            </li>
            <li>
              <Link to="/documentation">
                <DescriptionIcon fontSize="large"/>
              </Link>
            </li>
            <li>
              <Link to="/deconnexion">
                <LogoutIcon fontSize="large"/>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
