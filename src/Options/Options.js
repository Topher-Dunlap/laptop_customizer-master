import React, { Component } from 'react';
import OptionSelections from '../OptionSelection/OptionSelections'

class Options extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <OptionSelections
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
          USCurrency={this.props.USCurrency} />
      </form>
    )
  }
}

export default Options;