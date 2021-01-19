import React from 'react';
import { Row } from 'simple-flexbox';
import Logo from './Logo';


const LogoComponent = () => {
    return(
        <Row className='logoContainer' vertical='center'>
            <Logo />
            <span className='logoTitle'>Stonkio</span>
        </Row>
    )
    
};

export default LogoComponent;