import React, { Component } from '../../node_modules/react';

class SummaryOption extends Component {
  optionListGenerator() {
    return Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.props.selected[feature];
      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.props.USCurrency.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
  }

  render() {
    const optionList = this.optionListGenerator();
    return (
      optionList
    )
  }
}

export default SummaryOption;