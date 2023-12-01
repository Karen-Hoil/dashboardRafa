// src/components/Sidebar.js
import React from 'react';

const Sidebar = ({ onShowAdministradores, onShowLugares }) => {
    return (
        <div style={{ width: '200px', height: '100vh', padding: '10px', backgroundColor: 'grey' }}>
            <div
                onClick={onShowAdministradores}
                style={{
                    width: '100%',
                    marginBottom: '10px',
                    backgroundColor: '#87CEEB',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer',
                    textDecoration: 'none', // Elimina el subrayado del texto
                    textAlign: 'left',
                    marginBottom: '10px',
                }}
            >
                Administradores
            </div>
            <div
                onClick={onShowLugares}
                style={{
                    width: '100%',
                    backgroundColor: '#87CEEB',
                    border: 'none',
                    padding: '8px',
                    borderRadius: '5px',
                    color: 'white',
                    cursor: 'pointer',
                    textDecoration: 'none', // Elimina el subrayado del texto
                    textAlign: 'left',
                }}
            >
                Lugares
            </div>
        </div>
    );
};

export default Sidebar;
