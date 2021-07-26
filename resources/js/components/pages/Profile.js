import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";

const Profile = () => {
    const { id = window.Laravel.user.id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get("/api/user/" + id).then((resp) => {
            setUser(resp.data);
        });
    }, []);
    if (user?.name) return <h2>Profile {user.name}</h2>;
    return <Loading/>
};

export default Profile;
