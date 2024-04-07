import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { keycloak, initialized } = useKeycloak();
    const navigate=useNavigate();

    return (
        <Route
            {...rest}
            render={(props) =>
                initialized && keycloak.authenticated ? (
                    <Component {...props} />
                ) : (
                    navigate('/')
                )
            }
        />
    );
};

export default PrivateRoute;
