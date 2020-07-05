import React from 'react';
import { Link } from 'react-router-dom';

export default class RulesComputer extends React.Component {
  state = {
    difficulty: 4
  }
  handleDropdownChange = (e) => {
    this.setState({ difficulty: e.target.value });
  }
  render () {
    return(
      <div className="rules-container">
        <h2 className="rules-header">Rules for playing against Computer</h2>
        <p>Blahhhhhhhhhhhhhhh</p>
        <select onChange={this.handleDropdownChange}>
          <option value="4">Easy - 4 words</option>
          <option value="5">Medium - 5 words</option>
          <option value="6">Hard - 6 words</option>
        </select>
        <Link to={`/play/Computer/${this.state.difficulty}`}>
          <button>Start Game</button>
        </Link>
        <Link to="/">
          <button>Home</button>
        </Link>
        
      </div>
    )
  }  
}

