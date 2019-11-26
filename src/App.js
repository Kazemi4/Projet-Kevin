import React from 'react';
import Home from './screen/Home'
import Characters from './screen/Characters';
import Header from './components/Header';
import CharacterInfo from './screen/Characterinfo'
import HouseCharacter from './screen/HouseCharacter'
import Staff from './screen/Staff';

import { Switch,Route,} from "react-router-dom";


import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters" component={Characters} /> 
        <Route path="/character/:id" component={CharacterInfo} />
        <Route path="/house/:house" component={HouseCharacter} />
        <Route path="/staff" component={Staff} />
      </Switch>

      {/* <Home /> */}
      {/* <Characters /> */}
    </div>
  );
}

export default App;
