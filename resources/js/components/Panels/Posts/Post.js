import axios from "axios";
import React, { Component } from "react";

export class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: this.props.data.liked,
            post: {},
            likeCount: this.props.data.like_count,
        };
    }

    handleLikeClick = () => {
        if (this.state.liked) {
            //dislike
            axios
                .delete("/api/dislikepost/" + this.props.data.like_id)
                .then((response) => {
                    if (response.data.etat)
                        this.setState({
                            liked: false,
                            likeCount: this.state.likeCount - 1,
                        });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            //like
            const joinedLike = {
                post_id: this.props.data.id,
                user_id: this.props.data.user_id,
            };
            axios
                .post("/api/likepost", joinedLike)
                .then((response) => {
                    if (response.data.etat) {
                        this.setState({
                            liked: true,
                            likeCount: this.state.likeCount + 1,
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    deleteHandle = () => {
        axios
            .delete("/api/post/" + this.props.data.id)
            .then((resp) => this.props.removePost(this.props.data.id));
    };

    render() {
        const { data } = this.props;

        return (
            <div className="card shadow-sm rounded mb-2 mt-2" key={data.id}>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h6 className="mb-2 text-muted">
                            {data.name} {data.id}
                        </h6>
                        <div className="dropdown dropleft">
                            <a
                                className="btn btn-n-sm dropdown-toggle"
                                href="#"
                                role="button"
                                id="dropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i className="fas fa-ellipsis-h"></i>
                            </a>

                            <div
                                className="dropdown-menu shadow-sm"
                                aria-labelledby="dropdownMenuLink"
                            >
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={this.editHandle}
                                >
                                    <i className="far fa-edit"></i> Edit
                                </a>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={this.deleteHandle}
                                >
                                    <i className="far fa-trash-alt"></i> Delete
                                </a>
                            </div>
                        </div>
                    </div>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.content}</p>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {data.created_at}
                    </h6>
                    <div>
                        <button
                            className="btn btn-lightGray"
                            onClick={this.handleLikeClick}
                        >
                            {this.state.liked ? (
                                <>
                                    <i className="fas fa-thumbs-up text-primary"></i>
                                    <span className="text-primary">
                                        {this.state.likeCount} likes
                                    </span>
                                </>
                            ) : (
                                <>
                                    <i className="far fa-thumbs-up"></i>
                                    <span>{this.state.likeCount} likes</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
