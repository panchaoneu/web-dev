import React from "react";
import {Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";
import HelloWorld from "./HelloWorld";

import ExploreScreen from "./Build/ExploreScreen";
import HomeScreen from "./Build/HomeScreen/HomeScreen";

const A6 = () => {
    return(
            <div>
                <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/build">
                    <Build/>
                </Route>

                <Route path ="/a6/twitter/explore" component={ExploreScreen}/>
                <Route path ="/a6/twitter/home" component={HomeScreen}/>
            </div>
    )
}

export default A6;