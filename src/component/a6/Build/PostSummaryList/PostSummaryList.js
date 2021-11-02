import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.json";


const PostSummaryList = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../images/react-blue.png"
        }
    }


) => {
    return (
            <ul className="list-group">

            {
        posts.map(posts =>{
            return(<PostSummaryItem posts={posts}/>);
        })
    }
            </ul>
); }
export default PostSummaryList;