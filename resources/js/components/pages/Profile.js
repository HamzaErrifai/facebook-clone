import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import PostShow from "../Panels/Posts/PostShow";
import ImgUpload from "../utils/ImgUpload";
import Loading from "../utils/Loading";

const Profile = () => {
    const { id = window.Laravel.user.id } = useParams();
    const [user, setUser] = useState({});
    const [showUpload, setShowUpload] = useState(false);

    const handleShowUpload = () => {
        setShowUpload(!showUpload);
    };

    const storePhoto = (e) => {
        e.preventDefault();
        const imagefile = document.querySelector("#upload");
        if (imagefile.files.length > 0)
            Swal.fire({
                title: "Are you sure?",
                text: "Your profile picture will be shown to all the visitors of your account",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#f0ad4e",
                cancelButtonColor: "#292b2c",
                confirmButtonText: "Yes, change my photo",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        "Uploaded!",
                        "Your Profile picture has been Updated.",
                        "success"
                    );
                    let formData = new FormData();

                    formData.append("photo", imagefile.files[0]);
                    axios
                        .post(
                            `/api/user/${window.Laravel.user.id}/photo`,
                            formData,
                            {
                                headers: {
                                    "Content-Type": "multipart/form-data",
                                },
                            }
                        )
                        .then((resp) => {
                            if (resp) {
                                setShowUpload(!showUpload);
                            }
                        });
                }
            });
    };

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
                        id="imageResult"
                        src={`/storage/${user.photo}`}
                        className="user-img profile-img shadow"
                        onClick={handleShowUpload}
                    />
                </div>
                <h2 className="text-center">{user.name}</h2>
                {id == window.Laravel.user.id && showUpload && (
                    <form
                        id="uploadForm"
                        role="form"
                        method="post"
                        encType="multipart/form-data"
                        onSubmit={storePhoto}
                    >
                        <ImgUpload />
                    </form>
                )}{" "}
                <PostShow
                    what={`postsof/${user.id}`}
                    isCreateAvailable={id == window.Laravel.user.id}
                />
            </div>
        );
    if (!Number.isInteger(Number.parseInt(id))) return <Redirect to="/" />;
    return <Loading />;
};

export default Profile;
