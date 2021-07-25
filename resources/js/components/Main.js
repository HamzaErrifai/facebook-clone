import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./includes/NavBar";
import "../../css/app.css";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

export class Main extends Component {
    render() {
        return (
            <Router>
                <>
                    <NavBar />
                    <div className="content">
                        <Switch>
                            <Route exact path={["/", "/home"]}>
                                <Home />
                            </Route>

                            <Route path="/profile">
                                <h1 className="dummy-push">Profile</h1>
                            </Route>
                            <Route path="/messages">
                                <h1 className="dummy-push">Messages</h1>
                            </Route>
                            <Route path="/login">
                                <h1 className="dummy-push">Login</h1>
                                <Login />
                            </Route>
                            <Route path="/register">
                                <h1 className="dummy-push">Register</h1>
                            </Route>
                            <Route path="/logout">
                                <Logout />
                            </Route>
                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
