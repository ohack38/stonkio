import React from 'react';
import { Row } from 'simple-flexbox';


const Header = (props) => {
    //logged prop for dynamic header options
    const { title, isLoggedIn } = props;
    return (
        <Row className='headerConteiner' vertical='center' horizontal='space-between'>
            <span className='headerTitle'>{title}</span>
            <Row vertical='center'>
                {
                    isLoggedIn 
                        ? (
                            <div className='auth'>
                                <button>Logout</button>
                            </div>
                            )
                        : ( 
                            <div className='auth'>
                                <button>Login</button>
                                <button>Sign Up</button>
                            </div>

                            )
                }
            </Row>
        </Row>
    );
}

export default Header;