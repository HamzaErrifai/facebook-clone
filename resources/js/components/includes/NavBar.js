import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <Link className="navbar-brand" to="/">
                <img src="/imgs/letter-f.svg" width="30" height="30" />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                {window.Laravel.user != null ? (
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">
                                Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/messages">
                                Messages
                            </Link>
                        </li>

                        <li className="nav-item dropdown ">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                {window.Laravel.user}
                            </a>
                            <div
                                className="dropdown-menu ml-auto"
                                aria-labelledby="navbarDropdown"
                            >
                                <Link className="dropdown-item" to="/logout">
                                    logout
                                </Link>
                            </div>
                        </li>
                    </ul>
                ) : (
                    <div className="ml-auto">
                        <a className="btn btn-secondary" href="/login">
                            Log in
                        </a>
                        <span> </span>
                        <a className="btn btn-primary" href="/register">
                            Register
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
