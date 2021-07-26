import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { id = window.Laravel.user.id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        axios.get("/api/user/" + id).then((resp) => {
            setUser(resp.data);
        });
    }, []);
    if (user) return <h2>Profile {user.name}</h2>;
};

export default Profile;
