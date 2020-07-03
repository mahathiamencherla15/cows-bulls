import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header>
        <h1>COWS & BULLS</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Create Game</NavLink>
        <NavLink to="/join" activeClassName="is-active">Join Game</NavLink><br></br><br></br>
    </header>
);

export default Header;