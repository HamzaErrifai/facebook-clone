import React from "react";

function Loading(props) {
    const { what } = props;
    const postsLoading = [
        <img
            src="/imgs/postsLoading.svg"
            className="rounded bg-white mt-2 shadow-sm"
            style={{ width: "100%" }}
        />,
        <img
            src="/imgs/postsLoading.svg"
            className="rounded bg-white mt-2 shadow-sm"
            style={{ width: "100%" }}
        />,
        <img
            src="/imgs/postsLoading.svg"
            className="rounded bg-white mt-2 shadow-sm"
            style={{ width: "100%" }}
        />,
    ];
    const suggestLoading = [
        <img
            src="/imgs/suggestLoading.svg"
            className="rounded bg-white mt-2 shadow-sm"
            style={{ width: "100%" }}
        />,
        <img
            src="/imgs/suggestLoading.svg"
            className="rounded bg-white mt-2 shadow-sm"
            style={{ width: "100%" }}
        />,
        <img
            src="/imgs/suggestLoading.svg"
            className="rounded bg-white mt-2 shadow-sm"
            style={{ width: "100%" }}
        />,
    ];

    switch (what) {
        case "post":
            return <div>{postsLoading}</div>;
            break;
        case "suggest":
            return <div>{suggestLoading}</div>;
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
