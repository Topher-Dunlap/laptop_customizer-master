import React, { Component } from 'react';
import slugify from '../../node_modules/slugify';

class OptionItem extends Component {

    render() {
      const itemHash = this.props.itemHash;
      const feature = this.props.feature;
      const item = this.props.item;
      const key = this.props.indexKey;
      return (
      <div key={itemHash} className="feature__item">
      <input
        key={key}
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === this.props.selected[feature].name}
        onChange={e => this.props.updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({this.props.USCurrency.format(item.cost)})
      </label>
    </div>
      )
      }
  }
  
  export default OptionItem;