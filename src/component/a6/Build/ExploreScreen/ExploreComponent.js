import React from "react";
import PostSummaryList from "../PostSummaryList/PostSummaryList";

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
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="News.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="Sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="Entertainment.html">Entertainment</a>
                </li>
            </ul>
            <div className="card">
                <img className="img-responsive" src={'../../../image/SPACEX.jpg'}/>
                    <div className="card-img-overlay wd-caption">SpaceX's Starship</div>
            <div>
                <PostSummaryList/>
            </div>
            </div>

        </>
    );
};
export default ExploreComponent;
