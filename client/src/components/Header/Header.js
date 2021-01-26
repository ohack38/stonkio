import React from 'react';
import { Row } from 'simple-flexbox';


const Header = (props) => {
    //logged prop for dynamic header options
    const { isLoggedIn } = props;
    return (
        <Row className='headerContainer' >
            <Row >
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