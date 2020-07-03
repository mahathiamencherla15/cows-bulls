import React from 'react';

const JoinGame = ( ) => (
  <div>
    <form>
    <label>Display name</label>
    <input type="text" name="username" placeholder="Enter your name" required/>
    <label>Room</label>
    <input type="text" name="room" placeholder="Enter room ID" required/>
    <button>Join!</button>
    </form>
  </div>
)

export default JoinGame;