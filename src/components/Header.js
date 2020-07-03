import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
    <header className="header-container">
        <h1 className="header__title">COWS & BULLS</h1>
        <NavLink to="/" activeClassName="is-active-1" className="a-border" exact={true}>Create Game</NavLink>
        <NavLink to="/join" activeClassName="is-active-2" className="a-border-2">Join Game</NavLink><br></br><br></br>
    </header>
);

export default Header;