import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class BreadCrumb extends Component {
  render() {
    let content;

    content = (this.props.isFinal)
      ? this.props.children
      : <NavLink to={this.props.to}>{this.props.children}</NavLink>

    return (
      <li className={`breadcrumb ${this.props.isFinal ? 'last' : ''}`}>
        {content}
      </li>
    );
  }
}

export default BreadCrumb;
