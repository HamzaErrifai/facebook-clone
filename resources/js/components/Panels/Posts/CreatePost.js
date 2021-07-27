import React, { Component } from "react";
import Swal from "sweetalert2";
import BigLabel from "../../utils/BigLabel";

export class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.contentRef = React.createRef();
        this.state = {
            posts: { title: "", content: "", name: window.Laravel.user },
            open: false,
        };
    }
    handleTitleChange = (e) => {
        // console.log(this.state.posts)
        this.setState((prevState) => ({
            posts: { ...prevState.posts, title: e.target.value },
        }));
    };

    handleContentChange = (e) => {
        this.setState((prevState) => ({
            posts: { ...prevState.posts, content: e.target.value },
        }));
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.createPost();
    };
    handleCreateBtn = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Create Post",
            width: 600,
            showCloseButton: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            customClass: {
                container: "popup-container",
                popup: "shadow",
            },
        });

        // this.setState({ open: true }, () => {
        //     this.contentRef.current.focus();
        // });
    };

    createPost = () => {
        axios
            .post(window.Laravel.url + "/api/addpost", this.state.posts)
            .then((response) => {
                if (response.data.etat) {
                    this.props.setPosts(response.data.post);
                    this.setState({
                        posts: {
                            title: "",
                            content: "",
                            name: window.Laravel.user,
                        },
                        open: false,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return this.state.open ? (
            <div className="shadow-sm bg-white rounded">
                <div className="border-bottom">
                    <BigLabel
                        txt="Create Post"
                        closeBtn={true}
                        handleClose={this.handleClose}
                    />
                </div>
                <form className="p-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            onChange={this.handleTitleChange}
                            value={this.state.title}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Content of the post"
                            onChange={this.handleContentChange}
                            value={this.state.content}
                            ref={this.contentRef}
                        ></textarea>
                    </div>
                    <button className="btn btn-primary btn-block">
                        Create Post
                    </button>
                </form>
            </div>
        ) : (
            <div className="shadow-sm bg-white rounded">
                <div className="pl-4 pr-4 pt-2 pb-2">
                    <button
                        className="btn btn-block bg-lightGray btn-n-sm"
                        onClick={this.handleCreateBtn}
                    >
                        What's on your mind?
                    </button>
                </div>
                <div className="border-top text-center pt-1 pb-1">
                    <button className="btn btn-n-sm fnt-size-15 btn-lightGray">
                        <i
                            className="far fa-image"
                            style={{ color: "green" }}
                        ></i>
                        <span> </span>
                        Photos
                    </button>
                </div>
            </div>
        );
    }
}

export default CreatePost;
