import React from "react";
import { Switch, Route } from "react-router-dom";
import Culture from "./components/culture";
import Product from "./components/product/index";
import Business from "./views/Business";
import Training from "./views/Training";

export default (
  <Switch>
    <Route exact path="/" component={Culture} />
    <Route exact path="/culture" component={Culture} />
    <Route exact path="/products" component={Product} />
    <Route path="/business" component={Business} />
    <Route path="/training" component={Training} />
  </Switch>
);
