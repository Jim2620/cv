import React from 'react';
import './App.css';
// import 'materialize-css/dis/css/materialize.min.css';
// import 'materialize-css/dis/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home.js';
import Skills from './components/skills/Skills.js';
import Education from './components/education/Education.js';
import Experience from './components/experience/Experience.js';
import Portfolio from './components/portfolio/Portfolio.js';


function App() {
   return (
     <Router>
         <>
           <Route exact path="/" component={Home} />
           <Switch>
               <Route path="/skills" component={Skills} />
               <Route path="/education" component={Education} />
               <Route path="/experience" component={Experience} />
               <Route path="/portfolio" component={Portfolio} />
           </Switch>
         </>
     </Router>
   );
}


export default App;