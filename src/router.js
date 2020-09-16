import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import JobDetail from "./components/JobDetail";
import JobListings from "./components/JobListings";
import JobForm from "./components/JobForm";

export default function Router() {
  return (
    <Switch>
      <Route path="/job/:slug" component={JobForm} />
      <Route path="/c/:companySlug/:jobSlug" component={JobDetail} />
      <Route path="/jobs" component={JobListings} />
      <Redirect path="/" to="/jobs" />
    </Switch>
  );
}
