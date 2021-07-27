import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import PostShow from "../Panels/Posts/PostShow";
import ImgUpload from "../utils/ImgUpload";
import Loading from "../utils/Loading";

const Profile = () => {
    const { id = window.Laravel.user.id } = useParams();
    const [user, setUser] = useState({});
    if (Number.isInteger(Number.parseInt(id)))
        useEffect(() => {
            axios.get("/api/user/" + id).then((resp) => {
                setUser(resp.data);
            });
        }, []);

    if (user?.name)
        return (
            <div className="container">
                <div className="d-flex justify-content-center">
                    <img
                        src={`/storage/${user.photo}`}
                        className="profile-img"
                    />
                </div>
                    <h2 className="text-center">{user.name}</h2>
                
                {/* <ImgUpload /> */}
                <PostShow what={`postsof/${user.id}`} />
            </div>
        );
    if (!Number.isInteger(Number.parseInt(id))) return <Redirect to="/" />;
    return <Loading />;
};

export default Profile;
