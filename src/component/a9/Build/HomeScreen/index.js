import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";
import PostSummaryList from "../PostSummaryList";

const HomeScreen=()=> {
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>

                <div className="col-9 col-lg-6 wd-left" style={{"position":"relative"}}>
                    <WhatsHappening/>
                    <TweetList/>
                </div>


                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList title="What's happening"/>
                </div>

            </div>
        </div>
    );

};

export default HomeScreen;