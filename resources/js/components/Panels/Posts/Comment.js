import React from "react";

function Comment(props) {
    const { data } = props;
    console.log(data)

    return (
        <div className="p-1">
            <img
                className="suggest-photo user-sm-photo"
                src="https://via.placeholder.com/250"
            />
            <div>
                <span className="text-muted">{data.user_id}</span>
                <span className="pl-3">{data.content}</span>
            </div>
        </div>
    );
}

export default Comment;
