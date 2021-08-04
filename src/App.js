import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(){
    super();
    this.state ={
count:0,
    }
  }
  Archimboldi = () =>{
    this.setState({
      count:this.state.count + 1
    })
  }
  Mashburn = () =>{
    this.setState({
      count:this.state.count - 1
    })
  } 
   Zero = () =>{
     this.setState({
       count:this.state.count = 0
     })
   }


  render(){
    return(
      <div>
        <h1>My App</h1>
       <h1>{this.state.count}</h1>
       <button onClick={this.Archimboldi}>upcount</button>
       <button onClick={this.Mashburn}>sub1</button>
       <button onClick={this.Zero}>Zero</button>
      </div>
    )
  }
}


export default App;