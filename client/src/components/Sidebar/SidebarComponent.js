import React from 'react';
import {
    NavLink,
  } from "react-router-dom";
import { Column } from 'simple-flexbox';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';

import WatchlistIcon from '../../assets/watchlistIcon.js';
import PriceIcon from '../../assets/ticketsIcon.js';
import FeedIcon from '../../assets/feedIcon.js';

const SidebarComponent = () => {
    return(
        <Column className='sb-container'>
            <LogoComponent />
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
    )
};

export default SidebarComponent;