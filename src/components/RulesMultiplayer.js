import React from 'react';
import { Link } from 'react-router-dom';

const RulesMultiplayer = () => (
  <div className="rules-container">
    <h2 className="rules-header">Rules for Multiplayer</h2>
    <p>Blahhhhhhhhhhhhhhh</p>
    <div>
    <select>
      <option>Easy - 4 letter words</option>
      <option>Medium - 5 letter words</option>
      <option>Hard - 6 letter words</option>
    </select>
    <button className="start">Start Game</button>
    <Link to="/">
          <button className="home">Home</button>
        </Link>
    </div>
  </div>
);

export default RulesMultiplayer;