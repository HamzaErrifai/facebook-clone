import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Suggestion(props) {
    const { data, what } = props;
    const [hideAddBtn, setHideAddBtn] = useState(true);
    const [showSuggestion, setShowSuggestion] = useState(
        false || what == "friends"
    );

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
                //friend added
                setHideAddBtn(true);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        axios.get("/api/friends").then((resp) => {
            const isFriend = resp.data.find((element) => element.id == data.id);
            setHideAddBtn(isFriend);
            setShowSuggestion(!isFriend || what == "friends");
        });
    }, []);
    if (showSuggestion)
        return (
            <Link
                to={`/profile/${data.id}`}
                className="list-group-item text-dark text-decoration-none border rounded mt-2 shadow-sm bg-white border-0"
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

                    {!hideAddBtn && (
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
    return null;
}

export default Suggestion;
