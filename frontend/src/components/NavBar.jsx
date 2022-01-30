import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
        </ul>
    )
}