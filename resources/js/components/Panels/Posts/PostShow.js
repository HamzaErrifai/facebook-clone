import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";
import CreatePost from "./CreatePost";
import NoWhat from "../../utils/NoWhat";
import Loading from "../../utils/Loading";

export class PostShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: true,
        };
    }

    setPosts = (post) => {
        this.setState({
            posts: this.state.posts.concat(post).reverse(),
        });
    };

    removePost = (id) => {
        this.setState({
            posts: this.state.posts.filter((elm) => elm.id !== id),
        });
    };

    fetchData = async () => {
        const api = await axios("/api/" + this.props.what);
        if (api.data.status == 200) {
            this.setState({
                isLoading: true,
            });
        }
        if (this.mounted)
            this.setState({
                posts: api.data.reverse(),
                isLoading: false,
            });
    };

    componentDidMount = () => {
        this.mounted = true;
        this.fetchData();
    };

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <div className="container post-show-container dummy-push mt-2 mb-2">
                {this.props.isCreateAvailable && (
                    <CreatePost setPosts={this.setPosts} />
                )}
                {this.state.posts && !this.state.isLoading ? (
                    this.state.posts.length > 0 ? (
                        this.state.posts.map((elm) => (
                            <Post
                                key={elm.id}
                                data={elm}
                                removePost={this.removePost}
                            />
                        ))
                    ) : (
                        <NoWhat what="posts" />
                    )
                ) : (
                    <Loading what="post" />
                )}
            </div>
        );
    }
}

export default PostShow;
