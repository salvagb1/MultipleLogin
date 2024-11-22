import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface LocationState {
  provider?: string;
  token?: string;
  code?: string;
}

const Profile: React.FC = () => {
  const location = useLocation();
  const [provider, setProvider] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const state = location.state as LocationState;
    if (state) {
      const { provider, token, code } = state;

      if (provider) {
        setProvider(provider);
        processProviderData(provider, token, code);
      } else {
        setError('No se pudo determinar el proveedor de inicio de sesión.');
      }
    } else {
      setError('No se recibió información de inicio de sesión.');
    }
  }, [location.state]);

  const processProviderData = (provider: string, token?: string, code?: string) => {
    if (provider === 'Google') {
      // Manejar token de Google
    } else if (provider === 'GitHub') {
      // Manejar código de GitHub
    } else if (provider === 'Microsoft') {
      // Manejar token de Microsoft
    }
  };

  return (
    <div>
      <h2>¡Iniciaste sesión exitosamente!</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {provider && <p>Estás autenticado con {provider}.</p>}
    </div>
  );
};

export default Profile;