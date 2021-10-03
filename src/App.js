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

function App() {
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
            <Education />
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

export default App;
