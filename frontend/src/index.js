import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloaks from './Keycloak'; // Import the useKeycloak hook
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  // <React.StrictMode>
    <BrowserRouter>
      <ReactKeycloakProvider authClient={keycloaks}>
        <App />
      </ReactKeycloakProvider>
    </BrowserRouter>
  // </React.StrictMode>
  ); // Render the Root component

reportWebVitals();