import React, { useState,useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/win.json';
import animationData2 from '../assets/win2.json';
import { FaSun, FaMoon, FaMoneyCheck, FaMoneyBill, FaShare } from 'react-icons/fa';
import Card from '../welcome-pages/Card';
import Footer from '../welcome-pages/Footer';
import { useKeycloak } from '@react-keycloak/web';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const [keycloakInitialized, setKeycloakInitialized] = useState(false);
  const { keycloak, initialized } = useKeycloak();
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn]= useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(()=>{
    if (initialized && keycloak.authenticated) {
      // Access user information after authentication
      console.log('User ID:', keycloak.idTokenParsed.sub);
      console.log('User Email:', keycloak.idTokenParsed.email);

      console.log("navigating");
      navigate("/home");
  }

  },[initialized, keycloak])

  const handleLogin = () => {
    if (!keycloak.authenticated) {
      console.log("user click and  not authenticated");
      keycloak.login(); 

    } else {
      console.log("user clicked and authenticated");
      navigate("/home");
    }
  };

  useEffect(() => {
    if (initialized && keycloak.authenticated) {
      // Access user information after authentication
      console.log('User ID:', keycloak.idTokenParsed.sub);
      console.log('User Email:', keycloak.idTokenParsed.email);

      console.log("navigating");
      // navigate("/home");
    }
    setKeycloakInitialized(true);
  }, [initialized, keycloak]);


  return (
    <div className='bg-[#020917] '>
      <div className='rounded-b-3xl rounded-t-3xl border-b-2 mb-10'>
        <div className="text-end pr-20 justify-center pt-[2rem] pb-[4rem]">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:scale-110"
          onClick={handleLogin}
          >
            Start now
          </button>
          <div className="absolute top-5 right-5 mt-4 mr-4">
            {darkMode ? (
              <FaMoon className="text-white text-2xl" onClick={toggleDarkMode} />
            ) : (
              <FaSun className="text-orange-300 text-2xl" onClick={toggleDarkMode} />
            )}
          </div>
        </div>
      </div>
      <div className="">
        <div className='flex flex-row pt-10 pb-10 space-x-4 pl-36 pr-20 rounded-b-3xl rounded-t-3xl bg-[#081730]'>
          <div className="flex flex-col justify-center">
            <h1 className={`font-bold text-6xl text-${darkMode ? 'white' : 'black'}`}>Welcome</h1>
            <div className={`flex flex-col justify-center text-${darkMode ? 'white' : 'black'}`}>
              <p className="text-lg mt-4">
                Ready to join a vibrant community of players?
              </p>
              <p className="text-lg">
                Compete for top prizes, unlock achievements,
              </p>
              <p className="text-lg">
                collect coins, and customize your avatar!
              </p>
            </div>
          </div>
          <div className="flex-1 pl-40">
            <Lottie animationData={animationData} style={{ width: '350px', height: 'auto' }} />
          </div>
        </div>

        <div className='flex flex-row space-x-4'>
          <div className="flex-1 pl-32">
            <Lottie animationData={animationData2} style={{ width: '350px', height: 'auto' }} />
          </div>
          <div className="flex flex-col justify-center pr-40">
            <h1 className={`font-bold text-5xl text-${darkMode ? 'white' : 'black'}`}>Payment Methods</h1>
            <div className={`flex flex-col justify-center text-${darkMode ? 'white' : 'black'}`}>
              <div className="flex items-center mt-4">
                <FaMoneyCheck className="text-4xl mr-4" />
                <p className="text-lg">Deposit Money</p>
              </div>
              <div className="flex items-center mt-4">
                <FaMoneyBill className="text-4xl mr-4" />
                <p className="text-lg">Withdraw Money</p>
              </div>
              <div className="flex items-center mt-4">
                <FaShare className="text-4xl mr-4" />
                <p className="text-lg">Share Money</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card/>
      <Footer/>
    </div>
  );
}

export default Welcome;
