import React from 'react'
import { Row } from 'simple-flexbox'


const PriceItem = ({ coin }) => {

    return(
        <Row className='priceItem'>
            <span>{coin.name}</span>
            <span>{coin.current_price}$</span>
            <span>{coin.market_cap}$</span>
            <span>{coin.total_volume}$</span>

        </Row>
    );
}

export default PriceItem;