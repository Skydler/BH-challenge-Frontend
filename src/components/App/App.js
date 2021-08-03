import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "../Schedule";
import Product from "../Product";
import NotFound from "../NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/email_schedule" component={Schedule} />
        <Route exact path="/" component={Product} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
