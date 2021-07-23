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

    setPosts = (post) => {
        console.log(post);
        console.log(this.state.posts);
        this.setState(
            {
                posts: this.state.posts.concat(post),
            },
            () => {
                this.sortPosts();
            }
        );
    };

    shouldComponentUpdate() {
        return true;
    }
    fetchData = async () => {
        const api = await axios("/posts");
        this.setState(
            {
                posts: api.data,
            },
            () => {
                this.sortPosts();
            }
        );
    };
    sortPosts = (e) => {
        const newPostList = this.state.posts.reverse();
        this.setState({
            posts: newPostList,
        });
    };

    componentDidMount = () => {
        this.fetchData();
    };

    render() {
        return (
            <div className="container post-show-container dummy-push mt-2 mb-2">
                <CreatePost setPosts={this.setPosts} />

                <BigLabel txt="My Posts" />
                {this.state.posts
                    ? this.state.posts.map((elm, i) => (
                          <Post data={elm} key={i} />
                      ))
                    : "Loading"}
            </div>
        );
    }
}

export default PostShow;
