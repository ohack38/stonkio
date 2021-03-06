import React from 'react'
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route { ...rest } render={ props  =>
                !localStorage.getItem('user')
                ? <Redirect to='/login' />
                : <Component { ...props } />
            }/>
    );
    
}

export default PrivateRoute;