import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen=()=> {
    return(
        <div class="container">
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>

                <div className="col-9 col-lg-6 wd-left"><ExploreComponent/></div>

                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>

    );

};

export default ExploreScreen;