import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import GitHubLogin from 'react-github-login';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const handleGoogleSuccess = (response) => {
        console.log('Google Login Successful:', response);
        const token = response.credential;

        // Redirigir a Profile con el proveedor Google
        navigate('/profile', { state: { provider: 'Google', token } });
    };

    // Manejador de error de Google
    const handleGoogleError = (error) => {
        console.log('Google Login Failed:', error);
    };

    // Manejo de éxito y error para GitHub
    const handleGitHubSuccess = (response) => {
        console.log('GitHub Login Successful:', response);
        const code = response.code;

        // Redirigir a Profile con el proveedor GitHub
        navigate('/profile', { state: { provider: 'GitHub', code } });
    };

    const handleGitHubFailure = (response) => {
        console.error('GitHub Login Failed:', response);
    };

    // Manejo de éxito para Microsoft
    const handleMicrosoftLogin = () => {
        instance
            .loginPopup()
            .then((response) => {
                console.log('Microsoft Login Successful:', response);

                // Redirigir a Profile con el proveedor Microsoft
                navigate('/profile', { state: { provider: 'Microsoft' } });
            })
            .catch((error) => {
                console.error('Microsoft Login Failed:', error);
            });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <div className="login-buttons">

                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    useOneTap
                    theme="outline" // Opcional: puedes cambiar el tema si lo deseas
                />

                <GitHubLogin
                    clientId="Ov23lioDtRciLJgIkHIv" // Coloca aquí tu Client ID
                    onSuccess={handleGitHubSuccess}
                    onFailure={handleGitHubFailure}
                    redirectUri="http://localhost:3000"
                    className="github-button"
                />

                <button onClick={handleMicrosoftLogin} className="microsoft-button">
                    Login with Microsoft
                </button>

            </div>
        </div>
    );
};

export default Login;