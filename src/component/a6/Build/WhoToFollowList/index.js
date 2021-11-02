import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                  <li className="list-group-item wd-left" style={{"fontSize":"22px"}}>
                  <b>Who to follow</b>
                  </li>
            {
                who.map(who =>{
            return(<WhoToFollowListItem who={who}/>);})
        }

            </ul>
); }
export default WhoToFollowList;