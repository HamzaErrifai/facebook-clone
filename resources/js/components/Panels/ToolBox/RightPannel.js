import React from "react";
import SuggestionsList from "./SuggestionsList";

function RightPannel() {
    return (
        <div id="sidebar-wrapper">
            <a
                className="list-group-item list-group-item-action bg-light border-0"
            >
                Friends
            </a>
            <SuggestionsList what="friends" />
        </div>
    );
}

export default RightPannel;
