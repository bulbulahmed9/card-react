import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';

const App = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/work" component={Work} />
       
      </Switch>
    </div>
  )
}

export default App