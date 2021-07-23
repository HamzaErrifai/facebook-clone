import React, { Component } from "react";
import BigLabel from "../../utils/BigLabel";

export class CreatePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
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
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.createPost();
    };

    createPost = () => {
        axios
            .post(window.Laravel.url + "/addpost", this.state)
            .then(function (response) {
                if (response.data.etat) console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="shadow-sm bg-white">
                <div className="border-bottom">
                    <BigLabel txt="Create Post" />
                </div>
                <form className="p-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            onChange={this.handleTitleChange}
                        />
                    </div>

                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Content of the post"
                            onChange={this.handleContentChange}
                        ></textarea>
                    </div>
                    <button className="btn btn-primary btn-block">
                        Create Post
                    </button>
                </form>
            </div>
        );
    }
}

export default CreatePost;
