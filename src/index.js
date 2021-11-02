import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import NavigationSidebar from "./component/a6/Build/NavigationSidebar";
import WhoToFollowListItem from "./component/a6/Build/WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./component/a6/Build/WhoToFollowList";
import PostSummaryList from "./component/a6/Build/PostSummaryList/PostSummaryList";
import ExploreScreen from "./component/a6/Build/ExploreScreen";
import HomeScreen from "./component/a6/Build/HomeScreen/HomeScreen";

ReactDOM.render(
        <App />,
    // <NavigationSidebar active= "explore"/>,
    // <WhoToFollowListItem/>,
    // <WhoToFollowList/>,
    // <PostSummaryList/>,
    //  <ExploreScreen/>,
    // <HomeScreen/>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
