# Getting Started with MultipleLogin

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

## Instrucciones para levantar el proyecto

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Instalar las dependencias

Primero, instala las dependencias necesarias para el proyecto utilizando el siguiente comando:

- Ejecutar en el bash
    npm install --legacy-peer-deps

### 2. Configurar las variables de entorno

Debes configurar las variables de entorno necesarias para el funcionamiento del inicio de sesión. Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables:

env
Copiar código
REACT_APP_GOOGLE_CLIENT_ID=tu-google-client-id
REACT_APP_MICROSOFT_CLIENT_ID=tu-microsoft-client-id
REACT_APP_GITHUB_CLIENT_ID=tu-github-client-id

Reemplaza tu-google-client-id, tu-microsoft-client-id, y tu-github-client-id con los valores correspondientes de tus aplicaciones registradas en cada proveedor.

### 3. Iniciar el proyecto en modo desarrollo
Una vez configuradas las variables de entorno, puedes iniciar el proyecto en modo desarrollo utilizando el siguiente comando:

- Ejecuta en el bash
    npm start
    