import React, { Component } from 'react';

class InventoryRow extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown = function() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    const { item, offset } = this.props;
    return (
      <li className={`inventory__row delay--${offset}`}>
        <span className="inventory__item-name">{item.name}</span>

        <ul className="inventory__properties">
          <li className="inventory__properties-item">{item.price}</li>
          <li className="inventory__properties-item" onClick={this.toggleDropdown}>...</li>
        </ul>

        {this.state.expanded ? (
          <div className="inventory__dropdown">
            {item.description}
          </div>
        ) : null}
      </li>
    );
  }
}

export default InventoryRow;