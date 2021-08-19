import React from "react";

function Comment(props) {
    const { data } = props;

    return (
        <div className="p-1 mb-1">
            <img
                className="suggest-photo user-sm-photo"
                src={`storage/${data.photo}`}
            />
            <div
                className="bg-lightGray rounded p-2 comment-holder"
            >
                <span className="text-muted comment-user">{data.name}</span>
                <span className="comment-content">{data.content}</span>
            </div>
        </div>
    );
}

export default Comment;
