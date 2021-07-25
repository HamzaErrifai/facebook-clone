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
import { AuthProvider } from "../contexts/AuthContext";
import axios from "axios";
import Welcome from "./pages/Welcome";

export class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isConnected: false,
            isLoading: true,
            showMessage: false,
            path: "/",
        };
    }
    setPath = (v) => {
        this.setState({
            path: v,
        });
    };

    componentDidMount = () => {
        if (window.Laravel.user == null) {
            axios.get("/api/isconnected").then((resp) => {
                if (resp.data.status == 200) {
                    this.setState({
                        isLoading: false,
                    });
                }
                this.setState(
                    {
                        isConnected: resp.data.etat,
                    },
                    () => {
                        this.context = this.state.isConnected;
                    }
                );
            });
        } else
            this.setState({
                isConnected: true,
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
                                {this.state.isConnected ? (
                                    <Home />
                                ) : (
                                    <Welcome />
                                )}
                            </Route>
                            {this.state.isConnected ? (
                                <>
                                    <Route exact path="/profile">
                                        <h1 className="">Profile</h1>
                                    </Route>
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
            </AuthProvider>
        );
    }
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
