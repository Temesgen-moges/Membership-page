// RegistrationForm.js
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegistrationForm = () => {
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false);

    return (
        <>
            <form className='formContainer'>
            <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>email</label>
                <input type='email' className='userInput' placeholder='example@email.com' name='email' style={{ fontSize: '14px', marginBottom: '15px' }} />
              
                <label style={{ fontSize: '15px', fontWeight: 'medium', paddingBottom: '5px' }}>Username</label>
                <input type='text' className='userInput' placeholder='Enter your username' name='username' style={{ fontSize: '14px', marginBottom: '15px' }} />
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

                {/* <div style={{ display: 'flex', fontSize: 'small' }}>
                    <input className='reminders' type='checkbox' id='rememberMe' name='rememberMe' />
                    <label className='reminders'>RememberMe</label>
                    <a href="#" style={{ marginLeft: '7.1rem', color: 'grey', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'darkgoldenrod'} onMouseLeave={(e) => e.target.style.color = 'grey'} >Forgot password..?</a>
                </div> */}

                <button type="submit" className='login-butt'>Register</button>
            </form>
        </>
    )
}

export default RegistrationForm;
