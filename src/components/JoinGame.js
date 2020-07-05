import React from 'react';
import { NavLink } from 'react-router-dom';

const JoinGame = ( ) => (
  <div className="game-container">
      <NavLink to="/" activeClassName="is-active-1" className="a-border" exact={true}>Create Game</NavLink>
      <NavLink to="/join" activeClassName="is-active-2" className="a-border-2">Join Game</NavLink><br></br><br></br>
  <div className="join-container">
    <div className="join-box">
    <h2 className="join-box__title">Hello!</h2>
    <form className="join-form">
    <input type="text" name="username" placeholder="Enter name" required/>
    <input type="text" name="room" placeholder="Enter room ID" required/>
    <button>Join</button>
    </form>
  </div>
  </div>
  </div>
)

export default JoinGame;