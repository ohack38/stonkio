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
import PrivateRoute from './components/Auth/PrivateRoute';
import LoginComponent from './components/Auth/LoginComponent';
import RegisterComponent from './components/Auth/RegisterComponent';


function App() {
  
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
      if(window.innerWidth < 768){
        setMobile(true);
      }
  },[])

  return (
    <Router>
      <div className='fullWidth'>
        <Row >
          <SidebarComponent mobile={isMobile}/>
          <Column >
            <Header />
            <div className='mainContainer'>
              <Switch>
                <PrivateRoute exact path='/' component={WatchlistComponent} />
                <Route path='/prices' component={PriceComponent} />
                <Route path='/feed' component={FeedComponent} />
                <Route path='/login' component={LoginComponent}/>                  
                <Route path='/register' component={RegisterComponent}/>                  
              </Switch>
            </div>


          </Column>
        </Row>
      </div>
      
    </Router>
    
    
  );
}

export default App;
