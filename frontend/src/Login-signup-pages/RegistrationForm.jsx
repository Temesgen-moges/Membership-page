import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import axios from "axios"

const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    const handleRegistration = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        
        try {
            // Make a POST request to your backend endpoint
            const response = await axios.post('http://localhost:3001/user/signup', {
                email: email,
                username: username,
                password: password
            });

            // Handle success response
            console.log('Registration successful:', response.data);
            // You can optionally redirect the user to another page or display a success message
        } catch (error) {
            // Handle error response
            console.error('Registration failed:', error);
            // You can display an error message to the user or handle the error in another way
        }
    };

    return (
        <>
            <form className='formContainer' onSubmit={handleRegistration}>
                <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>Email</label>
                <input 
                    type='email' 
                    className='userInput' 
                    placeholder='example@email.com' 
                    name='email' 
                    value={email} // Update value attribute with state variable
                    onChange={(e) => setEmail(e.target.value)} // Update state variable on change
                    style={{ fontSize: '14px', marginBottom: '15px' }} 
                />
              
                <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>Username</label>
                <input 
                    type='text' 
                    className='userInput'
                    placeholder='Enter your username' 
                    name='username' 
                    value={username} // Update value attribute with state variable
                    onChange={(e) => setUsername(e.target.value)} // Update state variable on change
                    style={{ fontSize: '14px', marginBottom: '15px' }} 
                />
                
                <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>Password</label>
                <input
                    value={password}
                    type={visible ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    className='passInput'
                    placeholder='Enter your password'
                    id='password'
                    style={{ fontSize: '14px' }}
                /> <br />
                <div className='passwordIcon mt-3' onClick={() => setVisible(!visible)}>
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>

                <button type="submit" className='login-butt'>Register</button>
            </form>
        </>
    )
}

export default RegistrationForm;
