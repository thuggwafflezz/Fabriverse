import React from "react";
import "../../App.css";

import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer/Footer";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SaveRequest from "../SavedRequest/SaveRequest";

function Home() {
  return (
    <>
      <Hero />
      {/* <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />{" "}
      </Switch> */}
      <Footer />
    </>
  );
}

export default Home;
