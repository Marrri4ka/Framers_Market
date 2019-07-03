import React from 'react';
import logo from './logo.svg';
import './App.css';
import FarmersMarket from './components/FarmersMarket';
import {Switch, Route} from 'react-router-dom';
import MarketScheduleList from './components/MarketScheduleList';
import Header from './components/Header';
import ProduceList from './components/ProduceList';
import Home from './components/Home';

function App() {
  return (<div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path="/marketSchedule" component={MarketScheduleList} />
      <Route path="/produceList" component={ProduceList}/>
    </Switch>

  </div>);
}

export default App;
