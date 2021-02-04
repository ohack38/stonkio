import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'simple-flexbox';
import API from '../../services/API';
import { getCurrentUser } from '../../services/authService';


const Header = () => {
    const history = useHistory();
    const user = getCurrentUser();
    const refresh = localStorage.getItem('refresh');
    const handleLogout = () => {
        API.logout({ refresh });
        history.push('/');

    }
    return (
        <Row className='headerContainer' >
            <Row >
                {
                    user 
                        ? (
                            <div className='auth'>
                                <button onClick={handleLogout}>Logout</button>
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