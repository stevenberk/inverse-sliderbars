import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      sliderValue: 0 ,
      secondSliderValue: 100,
      changeVal: 0,
      secondChangeVal: 100
    }
  }

componentDidUpdate(prevprops, prevstate){
    if (this.state.changeVal !== prevstate.changeVal){
      this.setState({secondSliderValue: this.state.changeVal})
    }
    if (this.state.secondChangeVal !== prevstate.secondChangeVal){
      this.setState({sliderValue: this.state.secondChangeVal})
    }
}

  render() {
    return (
      <div className="App">
        <div className="slidecontainer">
          <input type="range" min="0" max="100" value={this.state.sliderValue} 
            onChange={(event)=>{this.setState({sliderValue:parseInt(event.target.value, 10), 
            changeVal: 100 - parseInt(event.target.value, 10)
            
            })}}>
          </input>
          <input type="range" min="0" max="100" value={this.state.secondSliderValue}
            onChange={(event)=>{this.setState({secondSliderValue:parseInt(event.target.value, 10), 
            secondChangeVal: Math.abs(parseInt(event.target.value, 10) - 100)
            })}}>
          </input>
          <h1>
            {this.state.sliderValue}
          </h1>
          <h1>
            {this.state.secondSliderValue}
          </h1>
        </div>

      </div>
    );
  }
}

export default App;
