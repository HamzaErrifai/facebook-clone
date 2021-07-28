import React, { Component } from "react";
import Swal from "sweetalert2";

export class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            name: window.Laravel.user,
        };
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    handleContentChange = (e) => {
        this.setState({
            content: e.target.value,
        });
        e.target.value.length > 0
            ? $("#createBtn").attr("disabled", false)
            : $("#createBtn").attr("disabled", true);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        $("#exampleModalCenter").modal("hide");
        this.createPost();
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: false,
            showCloseButton: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            title: "Post Added",
        });
    };

    createPost = () => {
        axios
            .post(window.Laravel.url + "/api/addpost", this.state)
            .then((response) => {
                if (response.data.etat) {
                    this.props.setPosts(response.data.post);
                    this.setState({
                        title: "",
                        content: "",
                        name: window.Laravel.user,
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <>
                <div
                    className="modal popup-container"
                    id="exampleModalCenter"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                    >
                        <div className="modal-content shadow border-0">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="exampleModalLongTitle"
                                >
                                    Create post
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form
                                    className="p-3"
                                    onSubmit={this.handleSubmit}
                                >
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
                                        ></textarea>
                                    </div>
                                    <button
                                        className="btn btn-primary btn-block"
                                        id="createBtn"
                                        disabled
                                    >
                                        Create Post
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shadow-sm bg-white rounded">
                    <div className="pl-4 pr-4 pt-2 pb-2">
                        <button
                            type="button"
                            className="btn btn-block bg-lightGray btn-n-sm"
                            data-toggle="modal"
                            data-target="#exampleModalCenter"
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
            </>
        );
    }
}

export default CreatePost;
