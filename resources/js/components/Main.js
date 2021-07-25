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
import { AuthConsumer, AuthProvider } from "../contexts/AuthContext";
import axios from "axios";

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false,
        };
    }

    componentDidMount = () => {
        axios.get("/api/isconnected").then((resp) => {
            this.setState(
                {
                    isConnected: resp.data.etat,
                },
                () => {
                    this.context = this.state.isConnected;
                }
            );
        });
    };

    render() {
        return (
            <AuthProvider value={this.state.isConnected}>
                <Router>
                    <NavBar />
                    <div className="content dummy-push">
                        <Switch>
                            <Route exact path={["/", "/home"]}>
                                <Home />
                            </Route>
                            <Route path="/profile">
                                <h1 className="">Profile</h1>
                            </Route>
                            <Route path="/messages">
                                <h1 className="">Messages</h1>
                            </Route>
                            <Route path="/login">
                                <h1 className="">Login</h1>
                                <Login />
                            </Route>
                            <Route path="/register">
                                <h1 className="">Register</h1>
                            </Route>
                            <Route path="/logout">
                                <Logout />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </AuthProvider>
        );
    }
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
