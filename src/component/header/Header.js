import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <h1>Header component</h1>
            <ul class="nav">
                <li class="scroll-to-section"><NavLink exact to="/" >Home</NavLink></li>
                <li class="scroll-to-section"><NavLink exact to="/user">User</NavLink></li>
                <li class="scroll-to-section"><NavLink exact to="/about">About us</NavLink></li>
            </ul>
        </div>
    );
}

export default Header;