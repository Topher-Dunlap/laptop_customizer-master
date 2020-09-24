import React, { Component } from '../../node_modules/react';
import slugify from '../../node_modules/slugify';
import OptionItem from '../OptionItem/OptionItem';

class OptionSelections extends Component {
  optionItemGenerator() {
    return Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map((item, index) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <OptionItem
            key={itemHash}
            selected={this.props.selected}
            USCurrency={this.props.USCurrency}
            updateFeature={this.props.updateFeature}
            item={item}
            feature={feature}
            itemHash={itemHash} />
        );
      });
      return (
        <fieldset className="feature" key={featureHash} >
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      )
    });
  }

  render() {
    const optionItem = this.optionItemGenerator();
    return (
      optionItem
    )
  }
}

export default OptionSelections;