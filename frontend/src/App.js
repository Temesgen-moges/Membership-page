import './App.css';
import LoginSignup from './screan/LoginSignup';
import Home from './Login-signup-pages/Home';
import { Route, Routes } from 'react-router-dom';
import Welcome from './screan/Welcome';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/' element={<Welcome />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>


  );
}

export default App;
