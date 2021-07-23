import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import CreatePost from "./CreatePost";
import BigLabel from "../../utils/BigLabel";

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
            <div className="container post-show-container dummy-push mt-2 mb-2">
                <CreatePost/>
                <BigLabel txt="Posts"/>
                {this.state.posts
                    ? this.state.posts.map((elm, key) => (
                          <Post data={elm} key={key} />
                      ))
                    : "Loading"}
            </div>
        );
    }
}

export default PostShow;
