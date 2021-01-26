import React, { useState } from 'react';
import {
    NavLink,
  } from "react-router-dom";
import { Column, Row } from 'simple-flexbox';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';

import WatchlistIcon from '../../assets/watchlistIcon.js';
import PriceIcon from '../../assets/ticketsIcon.js';
import FeedIcon from '../../assets/feedIcon.js';
import BurgerIcon from '../../assets/burgerIcon';

const SidebarComponent = ({ mobile }) => {
    //const [isMobile, setMobile] = useState(mobile ? true : false);
    const [expanded, setExpanded] = useState(mobile ? false : true);
    
    const toggleSidebar = () => {setExpanded(!expanded);}

    return(
        <div style={{ position: 'relative' }}>
            <Row>
                <div className={expanded ? '' : 'collapsed'}>
                    <Column className='sb-container' >
                        <Row>
                            <LogoComponent />
                            {mobile ?
                                <div onClick={toggleSidebar}>
                                    <BurgerIcon />
                                </div>
                                : ''
                            }
                        
                        </Row>
                        <Column className='menuItemList'>
                            <NavLink 
                                className='menuContainer'
                                activeClassName='activeContainer'
                                to='/watchlist'
                            >
                                <MenuItemComponent title="Wathlist" icon={WatchlistIcon} />
                            </NavLink>
                            
                            <NavLink 
                                className='menuContainer'
                                activeClassName='activeContainer'
                                to='/prices'
                            >
                                <MenuItemComponent title="Prices" icon={PriceIcon} />
                            </NavLink>
                            
                            <NavLink 
                                className='menuContainer'
                                activeClassName='activeContainer'
                                to='/feed'
                            >
                                <MenuItemComponent title="Feed" icon={FeedIcon} />
                            </NavLink>
                            
                        </Column>
                    </Column>
                </div>
                
                
                { !expanded ? <div onClick={toggleSidebar}>
                    <BurgerIcon />
                </div> : '' }
                
                
                
            </Row>
        </div>
        
        
    )
};

export default SidebarComponent;