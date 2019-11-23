import React from 'react';
import Home from './screen/Home'
import Characters from './screen/Characters';
import Header from './components/Header';
import CharacterInfo from './screen/CharacterInfo';
import HouseCharacter from './screen/HouseCharacter';
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
      </Switch>

      {/* <Home /> */}
      {/* <Characters /> */}
    </div>
  );
}

export default App;
