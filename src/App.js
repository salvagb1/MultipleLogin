import './App.css';
import Login from './components/MultipleLogin';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import { GoogleOAuthProvider } from '@react-oauth/google'; 

const msalConfig = {
  auth: {
    clientId: "TU_MICROSOFT_CLIENT_ID",
    authority: "https://login.microsoftonline.com/common",
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <MsalProvider instance={msalInstance}>
        <Router>
          <div className="App">
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

