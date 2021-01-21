import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Column, Row } from 'simple-flexbox';
import './App.css';
import SidebarComponent from './components/Sidebar/SidebarComponent'
import Header from './components/Header/Header'
import WatchlistComponent from './components/Watchlist/WatchlistComponent'
import PriceComponent from './components/Prices/PriceComponent'
import FeedComponent from './components/Feed/FeedComponent'


function App() {


  return (
    <Router>
      <Row className='appContainer'>
        <SidebarComponent />
        <Column >
          <Header />


          <Switch>
            <Route path='/watchlist'>
              <WatchlistComponent />
            </Route>
            <Route path='/prices'>
              <PriceComponent />
            </Route>
            <Route path='/feed'>
              <FeedComponent />
            </Route>
          </Switch>


        </Column>
      </Row>
    </Router>
    
    
  );
}

export default App;
