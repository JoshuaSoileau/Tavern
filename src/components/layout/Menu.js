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
      open: true
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
        <button className="menu__control" aria-controls="navigation-menu" onClick={this.handleMenuIconClick}>
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="ellipse"></span>
          <span className="h-hidden">Open</span>
        </button>
        <div className={this.state.open ? 'navigation-menu navigation-menu--open' : 'navigation-menu'}>
          <ul className="menu">
            <li className="menu__item">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/">
                <IconTown className="menu__item-icon" />
                Town
              </Link>
            </li>
            <li className="menu__item">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/tavern">
                <IconTavern className="menu__item-icon" />
                Tavern
              </Link>
            </li>
            <li className="menu__item">
              <Link onClick={this.handleNavClick} className="menu__item-link" to="/alchemist">
                <IconAlchemist className="menu__item-icon" />
                Alchemist
              </Link>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;