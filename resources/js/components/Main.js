import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./includes/NavBar";
import "../../css/app.css";
import PostShow from "./Panels/Posts/PostShow";

export class Main extends Component {
    
    render() {
        return (
            <>
                <NavBar />
                <PostShow />
            </>
        );
    }
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
