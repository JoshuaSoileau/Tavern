import React, { Component } from "react";
import Link from "next/link";

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleMenuIconClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleNavClick() {
    this.setState({
      open: false,
    });
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={
            this.state.open
              ? "menu__control menu__control--open"
              : "menu__control"
          }
          aria-controls="navigation-menu"
          onClick={this.handleMenuIconClick}
        >
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="h-hidden">Open</span>
        </button>
        <div
          className={
            this.state.open
              ? "navigation-menu navigation-menu--open"
              : "navigation-menu"
          }
        >
          <ul className="menu">
            <li className="menu__item menu__item--lvl-0">
              <Link
                onClick={this.handleNavClick}
                className="menu__item-link"
                href="/"
              >
                Town
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-1">
              <Link
                onClick={this.handleNavClick}
                className="menu__item-link"
                href="/tavern"
              >
                Tavern
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-2">
              <Link
                onClick={this.handleNavClick}
                className="menu__item-link"
                href="/tavern/owner"
              >
                Owner
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-1">
              <Link
                onClick={this.handleNavClick}
                className="menu__item-link"
                href="/alchemist"
              >
                Alchemist
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-2">
              <Link
                onClick={this.handleNavClick}
                className="menu__item-link"
                href="/alchemist/owner"
              >
                Owner
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
