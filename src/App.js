import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    users: [
      {name: 'John'},
      {name: 'Mary'},
    ]
  };

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value}
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} name={this.state.users[0].name}/>
        <UserOutput name={this.state.users[0].name} > is my name. </UserOutput>
      </div>
    );
  }
}

export default App;
