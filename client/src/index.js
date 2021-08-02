import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home";
import NotFound from "./NotFound";
import ViewArticle from "./Article/ViewArticle";
import CreateArticle from "./Article/CreateArticle";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/article/add"} component={CreateArticle} />
        <Route exact path={"/article/:id"} component={ViewArticle} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
