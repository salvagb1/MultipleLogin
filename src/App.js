import './App.css';
import Login from './components/MultipleLogin';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import { GoogleOAuthProvider } from '@react-oauth/google'; 

// Configuración para Microsoft Login
const msalConfig = {
  auth: {
    clientId: "TU_MICROSOFT_CLIENT_ID", // Reemplaza con tu ID de cliente de Microsoft
    authority: "https://login.microsoftonline.com/common",
  },
};


const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <GoogleOAuthProvider clientId="994530759230-rimr910kj1nq249uo2land5l7o8hlarc.apps.googleusercontent.com"> {/* Aquí agregas tu client ID de Google */}
      <MsalProvider instance={msalInstance}>
        <Router>
          <div className="App">
            <h1>Welcome to the Login Page</h1>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Router>
      </MsalProvider>
    </GoogleOAuthProvider>
  
  );
}

export default App;

