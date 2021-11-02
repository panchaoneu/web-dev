import React from "react";

const PostSummaryItem = (
    {
        posts = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }) => {
    return(
            <ul className="list-group">
            <li className="list-group-item wd-left">
                        <div className="row wd-border">
                            <div className="col-10">
                                <h5 className="wd-note">{posts.topic}</h5>
                                <h4 className="wd-news-title">{posts.userName} <span><i className="fas fa-check-circle"></i></span> <span>{posts.time}</span></h4>
                                <p className="wd-news-title">{posts.title}</p>
                                <p className="wd-note">{posts.tweets}</p>

                            </div>
                            <div class="col-2">
                                <img class="img-fluid rounded" src={posts.image}/>
                            </div>
                        </div>
                    </li>

</ul>


    );
}
export default PostSummaryItem;