import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Suggestion(props) {
    const { data, what } = props;
    const [isFriend, setIsFriend] = useState(false);

    const handleMouseEnter = (e) => {
        e.target.children[0].classList.add("show");
    };
    const handleMouseLeave = (e) => {
        e.target.children[0].classList.remove("show");
    };

    const handleAddFriend = (e) => {
        e.preventDefault();
        axios
            .post("/api/addfriend/" + data.id)
            .then((resp) => {
                setIsFriend(true);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        if (what != "friends") {
            axios.get("/api/friends").then((resp) => {
                setIsFriend(resp.id == data.id);
            });
        } else setIsFriend(false);
    }, []);
    return (
        <Link
            to={`/profile/${data.id}`}
            className="list-group-item text-dark text-decoration-none border rounded mb-2 bg-white"
        >
            <div className="d-flex flex-row">
                <div className="p-2">
                    <img
                        src={`storage/${data.photo}`}
                        className="suggest-photo user-img"
                    />
                </div>
                <div
                    className="pt-3 popup"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {data.name.slice(0, 12).concat("...")}
                    <span className="popuptext">{data.name}</span>
                </div>

                {isFriend && (
                    <div className="pt-3 pr-2 ml-auto">
                        <i
                            className="fas fa-user-plus add-friend-icon"
                            onClick={handleAddFriend}
                        ></i>
                    </div>
                )}
            </div>
        </Link>
    );
}

export default Suggestion;
