import axios from "axios";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            close: false,
        };
    }

    componentDidMount = () => {
        axios.get("/api/logout").then((resp) => {
            if(resp.data.logged_off){
                console.log("log off")
                this.setState({
                    close: true,
                });
            }
        });
    };

    render() {
        return this.state.close && <Redirect to="/" />;
    }
}

export default Logout;
