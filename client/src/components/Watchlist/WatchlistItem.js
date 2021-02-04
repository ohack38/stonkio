import React from 'react'
import axios from 'axios'

const WatchlistItem = ({ coin }) => {
    
    const URL = `https://api.coingecko.com/api/v3/simple/price?ids=${coin.coin}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`
    const res =  axios.get(URL);
    
        
    
    return (
        <div className='wlItem'>
            {res.data ?
                <div>
                    <span>{coin.coin}</span>
                    <span>{res.data.usd}</span>
                    <span>{res.data.usd_market_cap}</span>
                    <span>{res.data.usd_24h_change}</span>
                </div>
                : 'No coins'
            }
            
        </div>
    );
}

export default WatchlistItem;