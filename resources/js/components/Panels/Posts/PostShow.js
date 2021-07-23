import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

export class PostShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
        };
    }
    fetchData = async () => {
        const api = await axios("/posts");
        this.setState({
            posts: api.data,
        });
    };

    componentDidMount = () => {
        this.fetchData();
    };

    render() {
        return (
            <div className="container">
                <h1>Posts</h1>
                {this.state.posts
                    ? this.state.posts.map((elm) => <Post data={elm} />)
                    : "Loading"}
            </div>
        );
    }
}

export default PostShow;
