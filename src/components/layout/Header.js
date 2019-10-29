import React from "react";

import BreadCrumbs from "../_general/BreadCrumbs/BreadCrumbs";
import Menu from "./Menu";

const Header = () => {
  return (
    <header className="header" role="banner">
      <div className="header-content">
        <BreadCrumbs />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
