import React, { useEffect, useState } from 'react'
import PriceItem from './PriceItem'
import Spinner from '../../assets/Spinner';
import API from '../../services/API';

const PriceComponent = () => {
    const[prices, setPrices] = useState([]);
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const res = await API.getPrices();
            //http://127.0.0.1:8000/
            console.log(res.data);
            setPrices(res.data);
            setLoading(false);
        };
        fetchData();
        
    },[]);

    //map prices, for item <PriceItem />
    return (
        <table>
            <thead style={{ textAlign: 'left' }}>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th></th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody >
                { prices !== null && !loading ? 
                    prices.map(coin => (
                        <PriceItem key={coin.id} coin={coin} />
                )) : 
                <Spinner />}
            </tbody>
            
            
        </table>
    );
}

export default PriceComponent;