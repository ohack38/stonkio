import React, { useState, useEffect } from 'react';
import API from '../../services/API';
import Spinner from '../../assets/Spinner';
import WatchlistItem from './WatchlistItem'

const WatchlistComponent = () => {

    const[coins, setCoins] = useState([]);
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const res = await API.getWatchlist();
            console.log(res.data);
            setCoins(res.data);
            setLoading(false);   
        }
        fetchData().catch((err) => {
                console.error(err);
            });
        
    },[]);

    return (
        <div>
            { coins !== null && !loading ? 
                    coins.map(coin => (
                        <WatchlistItem coin={coin} key={coin.coin_id}/>
                )) : 
                <Spinner />}
        </div>
    );
}

export default WatchlistComponent;