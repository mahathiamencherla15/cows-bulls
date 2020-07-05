import React from 'react';
import { Link } from 'react-router-dom';

const RulesTeams = () => (
  <div className="rules-container">
    <h2 className="rules-header">Rules for Teams</h2>
    <p>Blahhhhhhhhhhhhhhh</p>
    <select>
      <option>Easy - 4 words</option>
      <option>Medium - 5 words</option>
      <option>Hard - 6 words</option>
    </select>
    <button>Start Game</button>
    <Link to="/">
          <button>Home</button>
        </Link>
  </div>
);

export default RulesTeams;