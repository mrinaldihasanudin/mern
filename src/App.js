import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/style.scss";

import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import Example from "./pages/Example";
import Checkout from "./pages/Checkout";
function App() {
  return (
    <div className="font-body">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/properties/:id" component={DetailsPage}></Route>
          <Route path="/example" component={Example}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
