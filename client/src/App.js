import React, { useState } from 'react'
import { Column, Row } from 'simple-flexbox';
import './App.css';
import SidebarComponent from './components/Sidebar/SidebarComponent'
import Header from './components/Header/Header'

function App() {
  const [active, setActive] = useState('Watchlist')
  return (
    <Row className='appContainer'>
        <SidebarComponent active={active} onChange={(active) => setActive(active)} />
        <Column >
          <Header />
        </Column>
    </Row>
    
  );
}

export default App;
