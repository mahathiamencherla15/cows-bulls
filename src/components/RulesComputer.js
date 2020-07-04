import React from 'react';

const RulesComputer = (props) => (
  <div>
    <h2>Rules for playing against Computer</h2>
    <p>Blahhhhhhhhhhhhhhh</p>
    <select>
      <option>Easy - 4 words</option>
      <option>Medium - 5 words</option>
      <option>Hard - 6 words</option>
    </select>
    <button onClick={(e) => {
      e.preventDefault()
      props.history.push('/play/CvP')
    }}>Start Game</button>
  </div>
);

export default RulesComputer;