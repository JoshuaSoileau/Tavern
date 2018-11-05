import React, { Component } from 'react';
import InventoryRow from './InventoryRow';

class Inventory extends Component {
  render() {
    const { items, offset } = this.props;
    return (
      <ul className="inventory">
        {items.map((item, index) => <InventoryRow key={`inventory--${index}`} item={item} offset={index + offset} /> )}
      </ul>
    );
  }
}

export default Inventory;