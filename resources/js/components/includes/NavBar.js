import React from "react";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top ">
            <a className="navbar-brand" href="#">
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
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Home <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Features
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Pricing
                        </a>
                    </li>
                    <li className="nav-item dropdown">
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
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="/logout">
                                logout
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
