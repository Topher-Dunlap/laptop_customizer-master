import React, { Component } from 'react';
import SummaryTotal from '../SummaryTotal/SummaryTotal'
import SummaryOption from '../SummaryOption/SummaryOption'

class Summary extends Component {
    render() {
        return(
            <section className="main__summary">
            <h2>Your cart</h2>
                <SummaryOption 
                    selected={this.props.selected}
                    USCurrency={this.props.USCurrency} />
                <SummaryTotal 
                    selected={this.props.selected}
                    USCurrency={this.props.USCurrency} />
          </section>
        )
  }
}
  
  export default Summary;