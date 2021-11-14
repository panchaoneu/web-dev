import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import A6 from "./component/a6";
import A7 from "./component/a7";
import {Route, BrowserRouter,Link} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
            <div className="container">
                <Link to="/a6/practice">A6</Link> |
                <Link to="/a7/practice">A7</Link>
                <Route path="/a6">
                    <A6/>
                </Route>
                <Route path="/a7">
                    <A7/>
                </Route>
            </div>
      </BrowserRouter>

  );
}

export default App;
