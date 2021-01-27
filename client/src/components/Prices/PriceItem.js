import React from 'react'


const PriceItem = ({ coin }) => {

    return(
        // <Row className='priceItem'>
        //     <div className='leftPrice'>
        //         <span>{coin.rank}</span>
        //         <span>{coin.name}</span>
        //     </div>
        //     <div className='rightPrice'>
        //         <span>{coin.current_price}$</span>
        //         <span>{coin.market_cap}$</span>
        //     </div>
        
        // </Row>
        
            <tr>
                <td >{coin.rank}</td>
                <td><img src={coin.image} height='35' alt='LOGO'/></td>
                <td>{coin.name} </td>
                <td>${coin.current_price}</td>
                <td>${coin.market_cap}</td>
            </tr>
            
       
    );
}

export default PriceItem;