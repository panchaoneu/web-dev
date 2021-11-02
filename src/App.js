import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./component/a6/HelloWorld";
import Practice from "./component/a6/Practice";
import Build from "./component/a6/Build";
import {Route, BrowserRouter} from "react-router-dom";
import ExploreScreen from "./component/a6/Build/ExploreScreen";
import HomeScreen from "./component/a6/Build/HomeScreen/HomeScreen";

function App() {
  return (
      <BrowserRouter>

            <div className="container">
          <Route path="/a6/hello" exact={true}>
           <HelloWorld/>
          </Route>

          <Route path={["/", "/a6","/a6/practice"]} exact={true}>
             <Practice/>
          </Route>

            <Route path="/a6/build" exact={true}>
                <Build/>
            </Route>

            <Route path ="/a6/twitter/explore" component={ExploreScreen}/>
            <Route path ="/a6/twitter/home" component={HomeScreen}/>

            </div>
      </BrowserRouter>

  );
}

export default App;
