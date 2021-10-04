import { Switch, Route } from "react-router-dom";
import "./App.css";
// import 'materialize-css/dis/css/materialize.min.css';
// import 'materialize-css/dis/js/materialize.min.js';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Education from "./components/pages/education/Education";
import Experience from "./components/pages/experience/Experience";
import Portfolio from "./components/pages/portfolio/Portfolio";
import Profile from "./components/pages/profile/Profile";
import Skills from "./components/pages/skills/Skills.js";

import React, { Component } from "react";

class App extends Component {
  render() {
    // Edit this area for basic information about yourself
    var education = {
      name: "Jim",
      school1: "Baruch College",
      start1: "August 2006",
      finish1: "December 2010",
      school2: "Manhattan Center for Science and Mathematics",
      start2: "September 2002",
      finish2: "June 2006",
      major: "Industrial-Organizational Psychology",
      certification1: "DevelopIntelligence/American Express Coding Bootcamp",
      start3: "April 2021",
      finish3: "July 2021",
    };

    return (
      <div>
        <header>
          <h1>Welcome to my App</h1>
        </header>

        <main>
          <Switch>
            <Route path="/">
              <Home />
              <About />
              <Contact />
              <Education education={education} />
              <Experience />
              <Portfolio />
              <Profile />
              <Skills />
            </Route>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
