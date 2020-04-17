import React, { Component } from "react";
import "./App.css";
import "./Person/Person.css";
// import "./UserOutput/UserOutput";
// import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  // state = {
  //   persons: [
  //     { name: "Max", age: 28 },
  //     { name: "Manu", age: 29 },
  //     { name: "Stephanie", age: 26 }
  //   ],
  //   otherState: "some other value"
  // };

  state = {
    username: "mini Miska"
  };

  inputChangeHandler = event => {
    this.setState({ username: event.target.value });
  };
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!')
  //   // THIS MUTATES STATE DIRECTLY USE setState() INSTEAD: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 27 }
  //     ]
  //   });
  // };

  // nameChangeHandler = (event) => {
  //   this.setState( {
  //     persons:[
  //     { name: 'Max', age: 28 },
  //     { name: event.target.value, age: 29 },
  //     { name: "Stephanie", age: 27 }
  //   ]
  // } )
  // }

  // render() {
  //   const style = {
  //     backgroundColor: 'pink',
  //     font: 'inherit',
  //     border: '1px solid black',
  //     boxShadow: '0 2px 3px #ccc',
  //     padding: '8px',
  //     cursor: 'pointer'
  //   };
  render() {
    return (
      <div className="App">
        {/* this approach didnt work for whatever reason, go with bind.() below */}
        {/* <button 
        style = {style} 
        onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')} 
          changed={this.nameChangeHandler}>My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
        <UserInput
          changed={this.inputChangeHandler}
          currentName={this.state.username}
        />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Michaela" />
      </div>
    );
  }
}

export default App;
