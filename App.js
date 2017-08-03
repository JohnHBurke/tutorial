import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="Header">
          <h2 className="header-text">
            State and Props
          </h2>
        </div>
        <h1 className="titleText">
          WHAT IT IS
        </h1>
        <p className="paragraphText">
          There are two types of data that control a component: props and state.
        </p>
        <p className="paragraphText">
          Props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change,
          we have to use state. Props are explained best as “a way of passing data from parent to child.” Essentially, props are just a channel of communication between components,
          always moving from top (parent) to bottom (child).
        </p>
        <p className="paragraphText">
          State is another concept introduced by React and acts a little differently from props. State can be seen as most as what the data of a component is at the current time.
          In general, you should initialize State in the constructor, and then call setState when you want tochange it
        </p>
        <h1 className="titleText">
          HOW IT WORKS
        </h1>
        <p className="paragraphText">
          React and React Native are commonly referred to as having a "top-down" or "unidirectional" data flow. Any state is always owned by some specific component,
          and any data or UI derived from that state can only affect components "below" them in the tree.
        </p>
        <h1 className="titleText">
          EXAMPLE
        </h1>
        <img src="http://i.imgur.com/bCfCOS3.jpg">
        </img>
        <p className="paragraphText">
          Once the info for "burritos" is defined in the array, it can be called for later on in the render component as a prop. "this.props.burritos.map" is a means of directing the program from the top-down
          to get it to return the right information we want.
        </p>



      </div>
    );
  }
}

export default App;
