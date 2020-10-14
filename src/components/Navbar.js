import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "./assets/plascon_logo.png";
import strongLogo from "./assets/strong_logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="nav-wrapper">
            <div className="container">
                <div className="nav-inner">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src={logo} alt="" className="header-logo" />
                        </Link>
                    </div>
                    <div className="nav-items-wrapper">
                        <div className="nav-strong-logo nav-link">
                            <img src={strongLogo} alt="" className="header-strong-logo" />
                        </div>
                        <div className="nav-links-wrapper">
                            <div className="nav-link">
                                <Link to="/">SEND STRONGS</Link>
                            </div>
                            <div className="nav-link">
                                {/* <Link to="/map">SEE SA PAINTED STRONGS</Link> */}
                                <a href="#map-page">SEE SA PAINTED STRONGS</a>
                            </div>
                            <div className="nav-link">
                                <Link to="/map">PREVIOUS STRONGS</Link>
                            </div>
                        </div>
                        <div className="hamburger-wrapper">
                            <div className="three col">
                                <div className="hamburger" id="hamburger-1">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
