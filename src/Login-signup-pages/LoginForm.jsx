import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const LoginForm =()=>{
    
    const [password, setPassword] = useState("");   
    const [visible, setVisible] = useState(false);
return(
    <>
        
<form className='formContainer'>
<lable style={{fontSize:'15px', fontWeight:'medium', paddingBottom:'5px'}}>Username</lable>
<input type='text' className='userInput' placeholder='Enter your username' name='username' style={{fontSize:'14px', marginBottom:'15px'}}/>
<lable style={{fontSize:'15px', fontWeight:'medium', paddingBottom:'5px'}}>Password</lable>
<input value={password} type={visible ? "text" : "password"} onChange={(e)=>setPassword(e.target.value)} 
className='passInput' placeholder='Enter your password' id='password' style={{fontSize:'14px'}}/> <br/>
<div  className='passwordIcon'  onClick={()=>setVisible(!visible)}>{visible ? <VisibilityIcon /> : <VisibilityOffIcon /> }</div>

<div style={{display:'flex',fontSize:'small'}}>
    <input  className='reminders'type='checkbox' id='rememberMe' name='rememberMe'/>
    <lable className='reminders'>RememberMe</lable>
    <a href="#" style={{marginLeft:'7.1rem', color:'grey', textDecoration:'none'}}  onMouseEnter={(e) => e.target.style.color = 'darkgoldenrod'} 
   onMouseLeave={(e) => e.target.style.color = 'grey'} >Forgot password..?</a> 
</div>

        <button type="submit" className='login-butt'>Login</button>
</form>
    </>
)
}

export default LoginForm;