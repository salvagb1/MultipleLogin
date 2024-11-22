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
        navigate('/profile', { state: { provider: 'Google', token } });
    };

    const handleGoogleError = (error) => {
        console.log('Google Login Failed:', error);
    };

    const handleGitHubSuccess = (response) => {
        console.log('GitHub Login Successful:', response);
        const code = response.code;
        navigate('/profile', { state: { provider: 'GitHub', code } });
    };

    const handleGitHubFailure = (response) => {
        console.error('GitHub Login Failed:', response);
    };

    const handleMicrosoftLogin = () => {
        instance
            .loginPopup()
            .then((response) => {
                console.log('Microsoft Login Successful:', response);
                navigate('/profile', { state: { provider: 'Microsoft' } });
            })
            .catch((error) => {
                console.error('Microsoft Login Failed:', error);
            });
    };

    return (
        <div className="login-container">
            <div className="login-buttons">
                <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                    useOneTap
                    theme="outline"
                />
                <button onClick={handleMicrosoftLogin} className="microsoft-button">
                    Login with Microsoft  {process.env.REACT_APP_GITHUB_CLIENT_ID} gitssss {process.env.REACT_APP_GOOGLE_CLIENT_ID}
                </button>
                


                <GitHubLogin
                    clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                    onSuccess={handleGitHubSuccess}
                    onFailure={handleGitHubFailure}
                    redirectUri="http://localhost:3000"
                    className="github-button"
                />
            </div>
        </div>
    );
};

export default Login;