import React from "react";
const NavigationSidebar = ({
                               active = 'explore'
                           }) => {
    const isActive=(active,path)=>`list-group-item ${active===path?'active':''}`
    return(
        <>
            <div className="list-group">
            <a className="list-group-item" href={"/"}><i className="fab fa-twitter fa-inverse"></i></a>
                <a className={isActive(active,'home')}
                   href={"/"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-home fa-inverse"/></div>
                    <div className="d-none d-xl-block col-xl-10"> Home</div>
                </div>
            </a>

                <a className={isActive(active,'explore')} href={"/"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-hashtag fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Explore</div>
                </div>
            </a>

            <a className={isActive(active,'notification')}  href={"/#"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-bell fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Notification</div>
                </div>
            </a>

            <a className={isActive(active,'message')} href={"/#"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-envelope fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Message</div>
                </div>
            </a>

            <a className={isActive(active,'bookmarks')} href={"/#"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-bookmark fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Bookmarks</div>
                </div>
            </a>

            <a className={isActive(active,'lists')} href={"/#"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-list fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Lists</div>
                </div>
            </a>

            <a className={isActive(active,'profile')} href={"/#"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-user fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Profile</div>
                </div>
            </a>

            <a className={isActive(active,'more')} href={"/#"}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-comment-dots fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> More</div>
                </div>
            </a>
        </div>
            <div className="d-grid mt-2">
                <a href={"tweet.html"}
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;

