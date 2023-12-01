// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Administradores from './components/Administradores';
import Lugares from './components/Lugares';

const App = () => {
    const [mostrarAdministradores, setMostrarAdministradores] = useState(false);
    const [mostrarLugares, setMostrarLugares] = useState(false);

    const handleShowAdministradores = () => {
        setMostrarAdministradores(true);
        setMostrarLugares(false);
    };

    const handleShowLugares = () => {
        setMostrarLugares(true);
        setMostrarAdministradores(false);
    };

    const handleLogout = () => {
        // Implementa la lógica para cerrar sesión
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header usuario="Nombre de Usuario" onLogout={handleLogout} />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar onShowAdministradores={handleShowAdministradores} onShowLugares={handleShowLugares} />
                <div style={{ flex: 1, padding: '20px' }}>
                    {mostrarAdministradores && <Administradores />}
                    {mostrarLugares && <Lugares />}
                </div>
            </div>
        </div>
    );
};

export default App;
