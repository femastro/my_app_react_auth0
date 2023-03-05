import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
    const { isAuthenticated, isLoading, loginWithRedirect, logout } =
        useAuth0();
    if (isLoading) {
        return (
            <div className="container">
                <div className="row mt-5 py-5 mx-auto text-center">
                    <h1>Loading ...</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        App-React
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01"
                        aria-controls="navbarColor01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor01"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="/home">
                                    Home
                                    <span className="visually-hidden">
                                        (current)
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-end">
                            {isAuthenticated ? (
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        onClick={() => logout()}
                                    >
                                        LogOut
                                    </a>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        onClick={() => loginWithRedirect()}
                                    >
                                        Login
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
