import React, { useEffect, useState } from 'react';
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
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
      if(window.innerWidth < 768){
        setMobile(true);
      }
  },[])

  return (
    <Router>
      <Row className='appContainer'>
        <SidebarComponent mobile={isMobile}/>
        <Column >
          <Header />
          <div className='mainContainer'>
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
          </div>




        </Column>
      </Row>
    </Router>
    
    
  );
}

export default App;
