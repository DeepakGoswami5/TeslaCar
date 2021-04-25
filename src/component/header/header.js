import React from "react";
import './header.css';
import logoUrl from '../../assests/logo.svg'

const Header = () => (
    <div className="header">
        <img src={logoUrl} alt="Tesla"></img>
    </div>
)

export default Header;
