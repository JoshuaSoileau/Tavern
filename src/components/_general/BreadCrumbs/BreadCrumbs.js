/* eslint-disable no-undef */
import React from "react";
import { Breadcrumbs } from "react-breadcrumbs-dynamic";

import BreadCrumb from "./BreadCrumb";

/**
 * Local components
 */

const BreadCrumbs = () => (
  <ul className="breadcrumbs">
    <Breadcrumbs
      container="ul"
      item={BreadCrumb}
      duplicateProps={{ ...this.props }}
      finalItem={BreadCrumb}
      finalProps={{ isFinal: true }}
    />
  </ul>
);

export default BreadCrumbs;
