import React from "react";

function Loading(props) {
    const { what } = props;
    const postsLoading = [];
    const suggestLoading = [];
    
    switch (what) {
        case "post":
            for (let i = 0; i < 3; i++)
                postsLoading.push(
                    <img
                        key={i}
                        src="/imgs/postsLoading.svg"
                        className="rounded bg-white mt-2 shadow-sm"
                        style={{ width: "100%" }}
                    />
                );
            return <div>{postsLoading}</div>;
            break;
        case "suggest":
            for (let i = 0; i < 3; i++)
                suggestLoading.push(
                    <img
                        key={i}
                        src="/imgs/suggestLoading.svg"
                        className="rounded bg-white mt-2 shadow-sm"
                        style={{ width: "100%" }}
                    />
                );
            return <div>{suggestLoading}</div>;
            break;
        case "profile":
            return (
                <div style={{ textAlign: "center" }} className="m-neg-10">
                    <img
                        src="/imgs/profileLoading.svg"
                        style={{ width: "50%" }}
                    />
                </div>
            );
            break;
        case "spinner":
            return (
                <div className="d-flex justify-content-center mt-2">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
            break;
        default:
            return (
                <div className="d-flex justify-content-center mt-2">
                    <div className="spinner-border text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            );
            break;
    }
}

export default Loading;
