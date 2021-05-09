import React, {Component} from 'react';
import './App.css';
import SearchMovie from './searchMovie';

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <SearchMovie/>
      </div>
    );
  }
}

export default App;
