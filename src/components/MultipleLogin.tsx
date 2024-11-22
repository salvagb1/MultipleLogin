import React from 'react';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import GitHubLogin from 'react-github-login';
import { useMsal } from '@azure/msal-react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { instance } = useMsal();
  const navigate = useNavigate();

  const handleGoogleSuccess = (response: CredentialResponse) => {
    if (response.credential) {
        console.log('Google Login Successful:', response);
        const token = response.credential;
        navigate('/profile', { state: { provider: 'Google', token } });
    } else {
        console.error('Google Login Failed: No credential received');
    }
};

const handleGoogleError = () => {
    console.error('Google Login Failed');
};

  const handleGitHubSuccess = (response: { code: string }) => {
    console.log('GitHub Login Successful:', response);
    const code = response.code;
    navigate('/profile', { state: { provider: 'GitHub', code } });
  };

  const handleGitHubFailure = (response: unknown) => {
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
          Iniciar sesión con Microsoft
        </button>

        <GitHubLogin
          clientId={process.env.REACT_APP_GITHUB_CLIENT_ID || ''}
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