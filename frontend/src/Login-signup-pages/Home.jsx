import React, { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import HttpClient from '../middleware/HttpClient';

const Home = () => {
    const { keycloak, initialized } = useKeycloak(); 
    const api = HttpClient();

    useEffect(() => {
        const fetchData = async () => {
            console.log("token id is: ",keycloak.token);
            console.log("Request Headers:", api.defaults.headers);
            try {
                await api.get('/user/admin');
                await api.get('/user/user');
                 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (initialized && keycloak.authenticated) {
            fetchData();
        }
    }, [initialized, keycloak.authenticated]);

    const handleLogout = () => {
        keycloak.logout();
    };

    return (
        <div>
            {initialized && keycloak.authenticated ? ( 
                <div>
                    <h1>Welcome, {keycloak.idTokenParsed.preferred_username}</h1> 
                    <button onClick={handleLogout}>Logout</button> 
                </div>
            ) : (
                <h1>Please login to view this page</h1> 
            )}
        </div>
    );
};

export default Home;
