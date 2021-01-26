import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PriceItem from './PriceItem'
import Spinner from '../../assets/Spinner';
import { Column } from 'simple-flexbox';

const PriceComponent = () => {
    const[prices, setPrices] = useState([]);
    const[loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://127.0.0.1:8000/api/live');
            //http://127.0.0.1:8000/
            console.log(res.data);
            setPrices(res.data);
            setLoading(false);
        };
        fetchData();
        
    },[]);

    //map prices, for item <PriceItem />
    return (
        <Column className='priceContainer'>
            { prices !== null && !loading ? 
                prices.map(coin => (
                    <PriceItem key={coin.id} coin={coin} />
            )) : 
            <Spinner />}
            
        </Column>
    );
}

export default PriceComponent;