import React from 'react';
import Home from './screen/Home'
import Characters from './screen/Characters';
import Header from './components/Header';

import { Switch, Route} from "react-router-dom";


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={Characters} /> 
      </Switch>

      {/* <Home /> */}
      {/* <Characters /> */}
    </div>
  );
}

export default App;
