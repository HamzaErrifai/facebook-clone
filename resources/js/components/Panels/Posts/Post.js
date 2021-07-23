import React, { Component } from "react";

export class Post extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="card shadow-sm rounded mb-2" key={data.id}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">
                        {window.Laravel.user}
                    </h6>
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.content}</p>
                    <h6 className="card-subtitle mb-2 text-muted">
                        {data.created_at}
                    </h6>
                </div>
            </div>
        );
    }
}

export default Post;
