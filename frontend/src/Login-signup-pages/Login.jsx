import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Imgg from '../assets/img/onee.jpg';
import './Login.css';
import RegistrationForm from './RegistrationForm';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [keycloakInitialized, setKeycloakInitialized] = useState(false);
    const { keycloak, initialized } = useKeycloak();
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    console.log("token id is::", keycloak.token);

    useEffect(() => {
        console.log("user is this :: ", keycloak.isTokenExpired);
        if (initialized && keycloak.authenticated) {
            // Access user information after authentication
            console.log('User ID:', keycloak.idTokenParsed.sub);
            console.log('User Email:', keycloak.idTokenParsed.email);

            console.log("navigating");
            navigate("/home");
        }
        setKeycloakInitialized(true);
    }, [initialized, keycloak]);

    return (
        <>
            <div className='container'>
                <div className='imgContainer'>
                    <img className="L-img" src={Imgg} alt='rectangle' />
                </div>
                <div className='container2'>
                    <p className='login-title' style={{ color: 'grey', marginLeft: '7.3rem', fontSize: '20px' }}>Login Page</p>
                    <div className='buttonContainer'>
                        {keycloakInitialized && (
                            <>
                                <button className={` ${login ? 'bg-[#49BBBD]' : 'bg-transparent'} log-butt`} onClick={() => {
                                    setLogin(true);
                                    keycloak.login();
                                }}>Login</button>
                                <button className={`reg-butt ${login ? 'bg-transparent' : 'bg-[#49BBBD]'}`} onClick={() => {
                                    setLogin(false);
                                }
                                }>Register</button>
                            </>
                        )}
                    </div>

                    <p style={{ color: 'orange', fontWeight: 'bold', fontSize: '16px', width: '370px', marginBottom: '37px', textAlign: 'center' }}>
                        {keycloakInitialized && !keycloak.authenticated && 'Welcome'}
                    </p>
                    {!login && <RegistrationForm />}
                </div>
            </div>
        </>
    );
};

export default Login;
