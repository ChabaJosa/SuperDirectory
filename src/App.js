
import React, { Component } from 'react';
import './App.css';
import Heroes from './Components/Heroes/Heroes';
import Home from "./Components/Home"
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state={
    supsKey:"10157683958726708", // String interpolation isn't working with this
    marvelPublic:"8fc6c25d7b8c17ab22e20964381a9452",
    marvelPrivate:"d6fa3e44c676e9fcc6339f0d4d84a31bf70e71d0",
    marvelTs:1,
  }

  handleSubmit =  (state,e) => {
    e.preventDefault()

    let newHero = {name:state.heroeName}
    
     this.setState( {  // Sets the state to current file
      heroeName: newHero,
    })

    console.log("Called Handle Submit", this.state)
  }


  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/Heroes/:Name" 
            render={(props) => <Heroes appState     ={this.state}           {...props} />} />
          <Route exact path="/"             
            render={(props) => <Home   handleSubmit ={this.handleSubmit}    {...props} />} />
        </Switch>

      </div>
    );
  }

}

export default App;
