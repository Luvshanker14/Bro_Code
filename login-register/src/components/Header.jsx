import React from 'react';

const Header = ({ togglePopup }) => {
    return (
        <header className="header">
            <a href="#" className="logo">Logo</a>
            <nav className="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <button className="btnLogin-popup" onClick={togglePopup} style={{ marginRight: '40px' }}>Admin Login</button>
                <button className="btnLogin-popup" onClick={togglePopup} id="butUser">User Login</button>
            </nav>
        </header>
    );
};

export default Header;
