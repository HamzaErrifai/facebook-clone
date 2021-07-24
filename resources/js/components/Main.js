import React, { Component } from "react";
import ReactDOM from "react-dom";
import NavBar from "./includes/NavBar";
import "../../css/app.css";
import PostShow from "./Panels/Posts/PostShow";
import Welcome from "./Welcome";

export class Main extends Component {
    render() {
        return (
            <>
                <NavBar />
                {   window.Laravel.user ?
                    <PostShow /> : <Welcome/>
                    
                }
            </>
        );
    }
}

export default Main;

if (document.getElementById("main")) {
    ReactDOM.render(<Main />, document.getElementById("main"));
}
