import React, { Component } from "react";
import Comment from "./Comment";

export class CommentList extends Component {
    render() {
        let commentList = [];
        for (let i = 0; i < this.props.data.length; i++)
            commentList.push(
                <Comment
                    key={this.props.data[i].id}
                    data={this.props.data[i]}
                />
            );
        return <div>{commentList}</div>;
    }
}

export default CommentList;
