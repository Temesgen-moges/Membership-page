import './App.css';
import LoginSignup from './screan/LoginSignup';
import Home from './Login-signup-pages/Home';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>

      <Routes>
        <Route path='/' element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>


  );
}

export default App;
