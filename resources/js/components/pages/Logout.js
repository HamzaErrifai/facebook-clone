import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Logout extends Component {
    componentDidMount = () => {
        axios.get("/api/logout").then((resp) => {
            window.Laravel.user = null;
        });
    };
    render() {
        return <Redirect to="/" />;
    }
}

export default Logout;
