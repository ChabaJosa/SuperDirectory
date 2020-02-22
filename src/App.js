
import React, { Component } from 'react';
import './App.css';
import Heroes from './Components/Heroes/Heroes';
import Home from "./Components/Home"
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state={
    heroeName:"",
    state:false
  }

  handleSubmit = (state,e) => {
    e.preventDefault()

    let newHero = {name:state.heroeName}
    
    this.setState({  // Sets the state to current file
      heroeName: newHero,
      stateLifted: true
    })

    console.log("Called Handle Submit", this.state)
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/Heroes/:Name" 
            render={(props) => <Heroes appState={this.state}              {...props} />} />
          <Route exact path="/"             
            render={(props) => <Home   handleSubmit={this.handleSubmit}   {...props} />} />
        </Switch>

      </div>
    );
  }

}

export default App;
