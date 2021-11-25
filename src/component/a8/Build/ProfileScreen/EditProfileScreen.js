import React from "react";
import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList";
import EditProfile from "./EditProfile";

const EditProfileScreen=()=> {
    return(
        <div className="container">
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="profile"/>
                </div>

                <div className="col-9 col-lg-6 wd-left"><EditProfile/></div>

                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList/>
                </div>
            </div>
        </div>

    );

};

export default EditProfileScreen;