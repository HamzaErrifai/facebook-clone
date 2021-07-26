import React from "react";
import PostShow from "../Panels/Posts/PostShow";
import LeftPannel from "../Panels/ToolBox/LeftPannel";
import RightPannel from "../Panels/ToolBox/RightPannel";

function Home() {
    return (
        <>
            <LeftPannel />
            <RightPannel />
            <PostShow what={"posts"} />
        </>
    );
}

export default Home;
