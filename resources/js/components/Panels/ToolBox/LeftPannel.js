import React from "react";
import SuggestionsList from "./SuggestionsList";

function LeftPannel() {
    return (
        <div className="position-fixed overflow-auto stick">
            <a
                className="list-group-item list-group-item-action bg-light border-0 text-center"
            >
                <span className="text-primary">

                Suggestions
                </span>
            </a>
            <SuggestionsList what="suggestions" />
        </div>
    );
}

export default LeftPannel;
