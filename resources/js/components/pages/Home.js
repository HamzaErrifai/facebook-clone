import React, { Component } from "react";
import { AuthConsumer } from "../../contexts/AuthContext";
import PostShow from "../Panels/Posts/PostShow";
import Welcome from "./Welcome";

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
        };
    }

    componentDidMount = () => {
        this.setState();
    };
    render() {
        return (
            <AuthConsumer>
                {(value) => (value ? <PostShow /> : <Welcome />)}
            </AuthConsumer>
        );
    }
}

export default Home;
