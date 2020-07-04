import React from 'react';

const JoinGame = ( ) => (
  <div className="join-container">
    <div className="join-box">
    <h2 className="join-box__title">Hello!</h2>
    <form className="join-form">
    <input type="text" name="username" placeholder="Enter your name" required/>
    <input type="text" name="room" placeholder="Enter room ID" required/>
    <button>Join!</button>
    </form>
  </div>
  </div>
)

export default JoinGame;