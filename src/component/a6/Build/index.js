import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import ExploreScreen from "./ExploreScreen";

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>

            <ExploreScreen/>
          </>
    )
};

export default Build;

