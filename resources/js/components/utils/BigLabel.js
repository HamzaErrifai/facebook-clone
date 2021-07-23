import React from "react";

function BigLabel(props) {
    return (
        <h1 className="font-weight-bold d-flex justify-content-between">
            <div className="p-2">{props.txt}</div>
            {props.closeBtn && (
                <button
                    type="button"
                    className=" align-content-start btn btn-white btn-circle btn-md btn-lightGray"
                    onClick={props.handleClose}
                >
                    <i className="fas fa-times"></i>
                </button>
            )}
        </h1>
    );
}

export default BigLabel;
