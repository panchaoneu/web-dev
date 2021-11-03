import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({
                               active = 'explore'
                           }) => {
    const isActive=(active,path)=>`list-group-item ${active===path?'active':''}`
    return(
        <>
            <div className="list-group">
            <Link to = "/a6/" className="list-group-item"><i className="fab fa-twitter fa-inverse"></i></Link>

            <Link to="/a6/twitter/home" className={isActive(active,'home')}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-home fa-inverse"/></div>
                    <div className="d-none d-xl-block col-xl-10"> Home</div>
                </div>
            </Link>

            <Link to = "/a6/twitter/explore" className={isActive(active,'explore')}>
                <div className="row">
                    <div className="col-2"><i className="fas fa-hashtag fa-inverse"></i></div>
                    <div className="d-none d-xl-block col-xl-10"> Explore</div>
                </div>
            </Link>

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

