import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";

import "./Header.css";

const Header = () => {
    return (
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="Insta Clone" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="Enviar publicação" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
