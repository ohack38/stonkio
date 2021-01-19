import React from 'react';
import { Column } from 'simple-flexbox';
import LogoComponent from './LogoComponent';
import MenuItemComponent from './MenuItemComponent';

import WatchlistIcon from '../../assets/watchlistIcon.js';
import PriceIcon from '../../assets/ticketsIcon.js';
import FeedIcon from '../../assets/feedIcon.js';

const SidebarComponent = (props) => {
    return(
        <Column className='sb-container'>
            <LogoComponent />
            <Column className='menuItemList'>
                <MenuItemComponent 
                    title="Wathlist" icon={WatchlistIcon}
                    onClick={() => props.onChange('Watchlist')}
                    active={props.active === 'Watchlist'}
                />
                <MenuItemComponent 
                    title="Prices" icon={PriceIcon}
                    onClick={() => props.onChange('Prices')}
                    active={props.active === 'Prices'}
                />
                <MenuItemComponent 
                    title="Feed" icon={FeedIcon}
                    onClick={() => props.onChange('Feed')}
                    active={props.active === 'Feed'}
                />
            </Column>
        </Column>
    )
};

export default SidebarComponent;