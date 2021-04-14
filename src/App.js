import Navbar from "./NavBar";
import Home from "./Home";
import BlogDetails from "./BlogDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/*the switch component is to make sure only one component renders at once*/}
          <Switch>
            {/*the exact prop is to make sure that a component is rendered only when
            the path is exactly the same and not just part of it*/}
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/create">
              <Create />
            </Route>

            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
