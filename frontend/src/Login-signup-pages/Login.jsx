import React, { useState, useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import Imgg from '../assets/img/onee.jpg';
import './Login.css';
import RegistrationForm from './RegistrationForm'; // Import your custom registration form
// import { httpClient } from '../middleware/HttpClient'; // Assuming httpClient is correctly implemented
import { useNavigate } from 'react-router-dom';
import api from '../middleware/HttpClient';

const Login = () => {
    const [keycloakInitialized, setKeycloakInitialized] = useState(false);
    const { keycloak, initialized } = useKeycloak(); // Destructure initialized property
    const [login, setLogin] = useState(true);
    const navigate = useNavigate();
    console.log("token id is::", keycloak.token);

    /* http client will use this header in every request it sends */
    // console.log("token is the 2::",httpClient.defaults.headers.common['Authorization'] = `Bearer ${keycloak.token}`);
    // httpClient.defaults.headers.common['Authorization'] = `Bearer ${keycloak.token}`;
    // 
    

    useEffect(() => {
        console.log("user is this :: ", keycloak.isTokenExpired);
        if (initialized && keycloak.authenticated) {
            // Access user information after authentication
            console.log('User ID:', keycloak.idTokenParsed.sub);
            console.log('User Email:', keycloak.idTokenParsed.email);

            console.log("navigating");
            navigate("/home");
            // You can access more user information from the idTokenParsed object
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
                        {/* Hide login/register buttons while Keycloak is initializing */}
                        {keycloakInitialized && (
                            <>
                                {/* <button className="bg-transparent log-butt" onClick={() => keycloak.login()}>Login</button>
                                <button className="bg-transparent log-butt" onClick={() =>renderRegistration() }>Register</button> */}
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
