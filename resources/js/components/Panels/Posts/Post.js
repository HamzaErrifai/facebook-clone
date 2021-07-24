import React, { Component } from "react";

export class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            liked: this.props.data[0] != undefined,
            post: {},
        };
    }

    handleLikeClick = () => {
        if (this.state.liked) {
            //dislike
            axios
                .delete("/dislikepost/" + this.props.data[0].id)
                .then((response) => {
                    if (response.data.etat) this.setState({ liked: false });
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
                .post("/likepost", joinedLike)
                .then((response) => {
                    if (response.data.etat) this.setState({ liked: true });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    render() {
        const { data } = this.props;
        
        return (
            <div className="card shadow-sm rounded mb-2" key={data.id}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        {data.name} {data.id}
                    </h6>
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
                                <i className="fas fa-thumbs-up text-primary"></i>
                            ) : (
                                <i className="far fa-thumbs-up"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;
