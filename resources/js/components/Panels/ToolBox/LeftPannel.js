import React from "react";
import SuggestionsList from "./SuggestionsList";

function LeftPannel() {
    return (
        <div className="position-fixed overflow-auto stick">
            <a
                href="#"
                className="list-group-item list-group-item-action active"
            >
                Suggestions
            </a>
            <SuggestionsList />
        </div>
    );
}

export default LeftPannel;
