// src/components/Lugares.js
import React from 'react';

const Lugares = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Lugares</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ddd' }}>ID</th>
                        <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ddd' }}>Nombre</th>
                        <th style={{ backgroundColor: '#f2f2f2', padding: '10px', borderBottom: '1px solid #ddd' }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aquí irían tus datos de lugares */}
                    <tr>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>1</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Lugar 1</td>
                        <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <button
                                style={{
                                    backgroundColor: '#87CEEB',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    marginRight: '8px',
                                    transition: 'background-color 0.3s',
                                }}
                            >
                                Editar
                            </button>
                            <button
                                style={{
                                    backgroundColor: '#FF0000',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                    {/* Puedes agregar más filas según tus datos */}
                </tbody>
            </table>
        </div>
    );
};

export default Lugares;
