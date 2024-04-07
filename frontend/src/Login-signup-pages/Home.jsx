import React, { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
// import { httpClient } from '..middleware/HttpClient'; // Import the httpClient
import HttpClient from '../middleware/HttpClient';

const Home = () => {
    const { keycloak, initialized } = useKeycloak(); // Destructure keycloak object
    const [data, setData] = useState(null); // State to store response data
    const api = HttpClient();

    useEffect(() => {
        const fetchData = async () => {
            console.log("token id is: ",keycloak.token);
            console.log("Request Headers:", api.defaults.headers);
            try {
                // Make a GET request to your server endpoint
                // await httpClient.get('http://localhost:3001/user/admin');
                // await httpClient.get('http://localhost:3001/user/user');
                await api.get('/user/admin');
                await api.get('/user/user');
                 

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function when the component mounts
        if (initialized && keycloak.authenticated) {
            fetchData();
        }
    }, [initialized, keycloak.authenticated]);

    // Function to handle logout
    const handleLogout = () => {
        keycloak.logout(); // Call the logout method provided by Keycloak
    };

    return (
        <div>
            {initialized && keycloak.authenticated ? ( // Check if Keycloak is initialized and user is authenticated
                <div>
                    <h1>Welcome, {keycloak.idTokenParsed.preferred_username}</h1> {/* Display user's name */}
                    <button onClick={handleLogout}>Logout</button> {/* Button for logout */}
                </div>
            ) : (
                <h1>Please login to view this page</h1> 
            )}
        </div>
    );
};

export default Home;
