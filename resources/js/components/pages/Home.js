import React, { Component } from "react";
import PostShow from "../Panels/Posts/PostShow";
import Welcome from "./Welcome";

export class Home extends Component {
    render() {
        return <>{window.Laravel.user ? <PostShow /> : <Welcome />}</>;
    }
}

export default Home;
