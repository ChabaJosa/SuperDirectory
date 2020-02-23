
import React, { Component } from 'react';
import './App.css';
import Heroes from './Components/Heroes/Heroes';
import Home from "./Components/Home"
import { Switch, Route } from 'react-router-dom';

// Logic:
// On submit of the search button handleSubmit gets called
// It takes the Home components state as a parameter and passes it to the Heroes.jsx component
// In there we use the state prop to set Config.js
// Use Config.js to make the apicalls and display the proper data

// Things to Fix Monday:
// Lifted state (T/F) not working on heroes component axios if statement
// Fix Home component height

class App extends Component {

  state={
    supsKey:"10157683958726708", // String interpolation isn't working with this
    marvelPublic:"8fc6c25d7b8c17ab22e20964381a9452",
    marvelPrivate:"d6fa3e44c676e9fcc6339f0d4d84a31bf70e71d0",
    marvelTs:1,
    // heroeName:"",
    // stateLifted:false
  }

  handleSubmit =  (state,e) => {
    e.preventDefault()

    // let newHero = {name:state.heroeName}
    
    //  this.setState( {  // Sets the state to current file
    //   heroeName: newHero,
    //   stateLifted: true
    // })

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
