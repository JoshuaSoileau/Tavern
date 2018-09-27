import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


class Breadcrumbs extends Component {
  render() {
    return (
      <ul className="breadcrumbs">
        <li className="breadcrumb">
          <NavLink to='/' activeClassName='active'>Home</NavLink>
        </li>
        <li className="breadcrumb">
          <NavLink to='/tavern' activeClassName='active'>Tavern</NavLink>
        </li>
        <li className="breadcrumb">
          <NavLink to='/lost' activeClassName='active'>Lost</NavLink>
        </li>
      </ul>
    );
  }
}

export default Breadcrumbs;