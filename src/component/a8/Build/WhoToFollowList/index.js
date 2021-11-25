import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state)=>{
    console.log(state)
    return state.who;
}

const WhoToFollowList = () => {
    const who=useSelector(selectAllWho);
    console.log("who", who)
    return (
            <ul className="list-group">
                  <li className="list-group-item fw-bold">
                  Who to follow
                  </li>
            {
                who.map((who,index) =>{
            return(<WhoToFollowListItem idx={index} who={who}/>);})
        }
            </ul>
); }
export default WhoToFollowList;