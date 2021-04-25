import React , {Component} from 'react';
import './App.css';
import Header from './component/header/header';
import TeslaBattery from './container/teslaBattery';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Header/>
        <TeslaBattery/>
      </div>
    );
  }
}

export default App;
