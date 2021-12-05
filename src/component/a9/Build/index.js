import React from "react";
import {Route} from "react-router-dom";
import tweets from "../../../reducers/tweets";
import who from "../../../reducers/who";
import profile from "../../../reducers/profile";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";
import EditProfileScreen from "./ProfileScreen/EditProfileScreen";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";


const reducer =combineReducers({tweets:tweets,who,profile})
const store= createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a9/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a9/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path={["/", "/a9/twitter/profile"]}
                       exact={true} component={ProfileScreen}/>
                <Route path={["/", "/a9/twitter/editProfile"]}
                       exact={true} component={EditProfileScreen}/>

            </div>
        </Provider>
    );
};
export default Build;