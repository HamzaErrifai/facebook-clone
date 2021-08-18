import axios from "axios";
import React, { useEffect, useState } from "react";

function Comment(props) {
    const { data } = props;
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get("/api/user/" + data.user_id).then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return (
        <div className="p-1 mb-1">
            <img
                className="suggest-photo user-sm-photo"
                src={`storage/${user.photo}`}
            />
            <div
                className="bg-lightGray rounded p-2 "
                style={{ display: "inline" }}
            >
                <span className="text-muted ">{user.name}</span>
                <span className="ml-3 ">{data.content}</span>
            </div>
        </div>
    );
}

export default Comment;
