import React from "react";

function Loading() {
    return (
        <div className="d-flex justify-content-center mt-2">
            <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
