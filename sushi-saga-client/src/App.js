import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushi: [],
      sushiIndex: 0,
      eatenSushi: [],
      customerBudget: 150
    }
  }

  componentDidMount = ()=>{
    fetch(API)
    .then(res=>res.json())
    .then(sushi => this.setState({ sushi }))
  }

  getFourSushi = () => {
    let fourSushi = this.state.sushi.slice(this.state.sushiIndex,this.state.sushiIndex+4)
    return fourSushi
  }

  eatSushi = (sushiObj) => {
    if (this.state.customerBudget >= sushiObj.price) {
      this.setState({ 
        eatenSushi: [...this.state.eatenSushi, sushiObj],
        customerBudget: this.state.customerBudget - sushiObj.price
      })
    } else {
      alert("You don't have enough money for sushi")
    }
  }

  getFourMoreSushi = () => { 
    if (this.state.sushiIndex + 4 < this.state.sushi.length ) {
    this.setState({ 
      sushiIndex: this.state.sushiIndex + 4 
    }) 
    } else {
    this.setState({
      sushiIndex: 0
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.getFourSushi()}
          getFourMoreSushi={this.getFourMoreSushi}
          eatSushi={this.eatSushi}  
          eatenSushi={this.state.eatenSushi}
        />
        <Table 
          eatenSushi={this.state.eatenSushi}
          budget={this.state.customerBudget}
        />
      </div>
    );
  }
  
}

export default App;