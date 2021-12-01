import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/twitterServices";


const selectAllTweets = (state) => state.tweets.tweets;
const TweetList = () => {
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch();
    useEffect(()=> fetchAllTweets(dispatch),[])
    return(
        <ul className="list-group">
            {
                tweets.map((tweet,key) =>
                    <TweetListItem key={key} tweet={tweet}/>
                )
            }
        </ul>
    )
};

export default TweetList;
