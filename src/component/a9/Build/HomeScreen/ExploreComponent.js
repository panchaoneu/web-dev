import React from "react";
import PostList from "../HomePostList/PostList";
const ExploreComponent = () => {
    return(
        <>
            <div className="row  wd-search-margin">
                <div className="col-10 wd-search-bar">
                    <i className="fas fa-search wd-search-icon"></i>
                    <input className="form-control wd-field" placeholder="Search Twitter"/>
                </div>
            </div>

            <ul className="nav nav-tabs wd-nav wd-search-margin">
                <li className="nav-item">
                    <a className="nav-link active" href={"/"}>For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/"}>Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/"}>News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={"/"}>Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href={"/"}>Entertainment</a>
                </li>
            </ul>

            <div>
                <PostList/>
            </div>
        </>

    );
}
export default ExploreComponent;
