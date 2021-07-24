import React, { Component } from "react";
import BigLabel from "../../utils/BigLabel";

export class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            posts: { title: "", content: "" },
            open: false,
        };
    }
    handleTitleChange = (e) => {
        console.log(this.state);
        this.setState({
            posts: { title: e.target.value, ...this.state.posts },
            ...this.state,
        });
    };

    handleContentChange = (e) => {
        console.log(this.state);
        this.setState({
            posts: { title: e.target.value, ...this.state.posts },
            ...this.state,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.createPost();
    };
    handleCreateBtn = (e) => {
        e.preventDefault();
        this.setState({ open: true }, () => {
            this.inputRef.current.focus();
        });
    };

    createPost = () => {
        console.log(this.state.posts);
        // axios
        //     .post(window.Laravel.url + "/addpost", this.state.posts)
        //     .then((response) => {
        //         if (response.data.etat) {
        //             this.props.setPosts(response.data.post);
        //             this.setState({
        //                 title: "",
        //                 content: "",
        //             });
        //         }
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
                            ref={this.inputRef}
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
                    <button className="btn btn-primary btn-block">
                        Create Post
                    </button>
                </form>
            </div>
        ) : (
            <div className="shadow-sm bg-white rounded">
                <div className="pl-4 pr-4 pt-2 pb-2">
                    <button
                        className="btn btn-block bg-gray btn-n-sm"
                        onClick={this.handleCreateBtn}
                    >
                        What's on your mind ?
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
