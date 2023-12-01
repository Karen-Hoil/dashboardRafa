// src/components/Header.js
import React from 'react';

const Header = ({ usuario, onLogout }) => {
    return (
        <div className="header" style={{ backgroundColor: 'grey', display: 'flex', justifyContent: 'space-between', width: '100%', padding: '20px', fontSize: '20px' }}>
            <div className="usuario-nombre">{usuario}</div>
            <button onClick={onLogout} className="btn btn-danger">Cerrar Sesión</button>
        </div>
    );
};

export default Header;
