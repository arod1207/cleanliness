import React from 'react';

import './Nav.css';

const Nav = () => {
    return (
        <div className="nav">
            <div className="nav__left">
                <h2>Cleanliness</h2>
            </div>
            <div className="nav__right">
                <button className="nav__buttons">Login</button>
                <button className="nav__buttons">Register</button>
            </div>
        </div>
    );
};

export default Nav;
