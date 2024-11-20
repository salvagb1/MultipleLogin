import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Profile = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            const { provider, token, code } = location.state;
            console.log('Provider:', provider); // Para depuración
            console.log('Token o Code:', provider === 'Google' ? token : code); // Depende del proveedor
            console.error('No provider info found in location state.');
        }
    }, [location.state]);

    return (
        <div>
            <h2>¡Iniciaste sesión exitosamente!</h2>
            {location.state?.provider === 'Google' && (
                <p>Estás autenticado con Google.</p>
            )}
            {location.state?.provider === 'GitHub' && (
                <p>Estás autenticado con GitHub.</p>
            )}
            {location.state?.provider === 'Microsoft' && (
                <p>Estás autenticado con Microsoft.</p>
            )}
        </div>
    );
};

export default Profile;