import React, { Component } from 'react';
import './App.css';
import Book from './Book';

class App extends Component {
  // State
  // 16.8 
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am some other Prop"
  }
  // constructor() {
  //   super();
  //   this.state = {};
  // }
   
  changeBookState =()=> {
    
    this.setState({
      books: [
        { bookName: "Ninteen Eighty Four", writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metamorphosis", writer: "Franz kafka" }
      ],
    })
  }

  changeWithInput = event => {
    this.setState({
    books: [
      { bookName: event.target.value, writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ]
  });
  }

  render() {

    const style ={
      border: "1 px solid red",
      borderRadius:"5px",
      backgroundColor:"black",
      color:"white"
    }
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>

        <button onClick={this.changeBookState}>Change State</button>
        <input type="text" onChange={this.changeWithInput}></input>

        <Book bookName={this.state.books[0].bookName}
         writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[1].bookName}
         writer={this.state.books[0].writer} />
        <Book bookName={this.state.books[2].bookName} 
        writer={this.state.books[0].writer} />
      </div>




    );
  }
}

export default App;