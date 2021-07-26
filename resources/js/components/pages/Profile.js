import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
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
                <h2>Profile {user.name}</h2>
                <ImgUpload />
            </div>
        );
    if (!Number.isInteger(Number.parseInt(id))) return <Redirect to="/" />;
    return <Loading />;
};

export default Profile;
