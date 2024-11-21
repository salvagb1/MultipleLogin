import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();
    const [provider, setProvider] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (location.state) {
            const { provider, token, code } = location.state;

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

    const processProviderData = (provider, token, code) => {
        if (provider === 'Google') {
        } else if (provider === 'GitHub') {
        } else if (provider === 'Microsoft') {
        }
    };

    return (
        <div>
            <h2>¡Iniciaste sesión exitosamente!</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {provider && (
                <p>Estás autenticado con {provider}.</p>
            )}
        </div>
    );
};

export default Profile;