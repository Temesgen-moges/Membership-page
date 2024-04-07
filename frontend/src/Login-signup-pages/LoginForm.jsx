import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Keycloak from 'keycloak-js';
import React, { useEffect, useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [keycloak, setKeycloak] = useState(null);

    useEffect(() => {
        const keycloakInstance =new Keycloak({
            url: 'http://localhost:8080/',
            realm: 'demo',
            clientId: 'demos'
        });
        keycloakInstance.init({ onLoad: 'login-required' }).then(authenticated => {
            setKeycloak(keycloakInstance);
        })
        .catch(error => {
            console.error('Keycloak initialization error:', error);
            // Handle initialization error here, such as displaying an error message to the user
        });
    }, []);

    const login = () => {
        keycloak.login();
    };

    const logout = () => {
        keycloak.logout();
    };

    if (!keycloak) return <div>Loading...</div>;

    if (keycloak.authenticated) {
        return (
            <div>
                <p>Welcome, {keycloak.tokenParsed.preferred_username}!</p>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

    return (
        <>
            <form className='formContainer' onSubmit={login}>
                <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>Username</label>
                <input type='text' className='userInput' placeholder='Enter your username' name='username' value={username} onChange={(e) => setUsername(e.target.value)} style={{ fontSize: '14px', marginBottom: '15px' }} />
                <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>Password</label>
                <input value={password} type={visible ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} className='passInput' placeholder='Enter your password' id='password' style={{ fontSize: '14px' }} /> <br />
                <div className='passwordIcon' onClick={() => setVisible(!visible)}>{visible ? <VisibilityIcon /> : <VisibilityOffIcon />}</div>
                <button type="submit" className='login-butt'>Login</button>
            </form>
        </>
    );
};

export default LoginForm;
