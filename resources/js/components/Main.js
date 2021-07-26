import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./includes/NavBar";
import "../../css/app.css";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: window.Laravel.user != null,
        };
    }

    render() {
        return (
            <Router>
                <NavBar />
                <div className="content dummy-push">
                    <Switch>
                        <Route exact path={["/", "/home"]}>
                            {window.Laravel.user != null ? (
                                <Home />
                            ) : (
                                <Welcome />
                            )}
                        </Route>
                        {window.Laravel.user != null ? (
                            <>
                                <Route
                                    exact
                                    path="/profile/"
                                    component={Profile}
                                />
                                <Route
                                    path="/profile/:id"
                                    component={Profile}
                                />

                                <Route exact path="/messages">
                                    <h1 className="">Messages</h1>
                                </Route>
                                <Route exact path="/login">
                                    <h1 className="">Login</h1>
                                    <Login />
                                </Route>
                                <Route exact path="/register">
                                    <h1 className="">Register</h1>
                                </Route>
                                <Route exact path="/logout">
                                    <Logout />
                                </Route>
                            </>
                        ) : (
                            <Redirect
                                to={{
                                    pathname: "/",
                                    state: "Please sign in",
                                }}
                            />
                        )}
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
