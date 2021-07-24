import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
            <a className="navbar-brand" href="/home">
                <img src="/imgs/letter-f.svg" width="30" height="30" />
            </a>
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
                {window.Laravel.user ? (
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Notificatins
                            </a>
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
                                <a className="dropdown-item" href="/logout">
                                    logout
                                </a>
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
