import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assets/scss/style.scss";
function App() {
  return (
    <div className="font-body">
      <Router>
        <Route path="/" component={LandingPage}></Route>
      </Router>
    </div>
  );
}

export default App;
