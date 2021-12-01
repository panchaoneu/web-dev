import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json";

const PostList = (
    {
        post = {
            "profile": "../../../image/elon musk.jpg",
            "userName": "Elon Musk",
            "time": "@elonmusk .23h",
            "head": "Amazing show about@Inspiration4x mission",
            "image": "../../../image/post1.jpg",
            "title": "Countdown:Inspiration Mission to Space| Netflix Official Site",
            "text": "The spaceflight company founded by the billionaire Elon Musk launched four private passengers into orbit Wednesday on the first mission to space with an all-civilian crew."
        }
    }

) => {
    return (
            <ul className="list-group">
                  
            {
        posts.map(posts =>{
            return(<PostItem posts={posts}/>);
        })
    }
            </ul>
); }
export default PostList;