import axios from "axios";
import React, { Component } from "react";

export class Logout extends Component {
    componentDidMount = () => {
        if (window.Laravel.user != null)
            axios.get("/api/logout").then((resp) => {
                if (resp.data.logged_off) {
                    window.location.href = "/";
                }
            });
        else window.location.href = "/";
    };

    render() {
        return null;
    }
}

export default Logout;
