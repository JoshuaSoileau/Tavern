import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import icons from '../../icons';

const IconTavern = icons.beer.random();
const IconTown = icons.castle.random();
const IconAlchemist = icons.cauldron.random();

class Menu extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };

    this.handleMenuIconClick = this.handleMenuIconClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleMenuIconClick() {
    console.log("menu clicked");
    this.setState({
      open: !this.state.open
    });
  }

  handleNavClick() {
    console.log("menu item clicked");
    this.setState({
      open: false
    });
  }

  render() {
    return (
      <React.Fragment>
        <button className={this.state.open ? 'menu__control menu__control--open' : 'menu__control'} aria-controls="navigation-menu" onClick={this.handleMenuIconClick}>
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="h-hidden">Open</span>
        </button>
        <div className={this.state.open ? 'navigation-menu navigation-menu--open' : 'navigation-menu'}>
          <ul className="menu">
            <li className="menu__item menu__item--lvl-0">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/">
                Town
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-1">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/tavern">
                Tavern
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-2">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/tavern/owner">
                Owner
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-1">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/alchemist">
                Alchemist
              </Link>
            </li>
            <li className="menu__item menu__item--lvl-2">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/alchemist/owner">
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