import React  from 'react';
import {useState} from 'react';
import Imgg from '../assets/img/onee.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
 
import './Login.css';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Login=()=>{
  
    const [login, setLogin]= useState(true);
return(
    <>
<div className='container'>
<div className='imgContainer'>
<img className="L-img" src={Imgg} alt='rectangle'/>
</div>
<div className='container2'>
<p className='login-title' style={{color:'grey', marginLeft: '7.3rem', fontSize: '20px'}} >{login ? 'Login Page' :'Registration'}</p>
<div className='buttonContainer'>
<button className={` ${login ? 'bg-[#49BBBD]' : 'bg-transparent'} log-butt`} onClick={() => setLogin(true)}>Login</button>
    <button className={`reg-butt ${login ? 'bg-transparent' : 'bg-[#49BBBD]'}`} onClick={()=>setLogin(false)}>Register</button>
</div>

<p style={{ color: 'orange', fontWeight: 'bold', fontSize: '16px', width: '370px', marginBottom: '37px', textAlign: 'center' }}>
  {login ? 'Welcome ' : ''}
</p>
{login ? <LoginForm /> : <RegistrationForm />}
</div>

</div>

    </>


)
}
export default Login;