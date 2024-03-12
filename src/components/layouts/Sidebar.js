import React from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
    const menuItems = [
        { path: '/inicio', label: 'Início', icon: 'bx bx-grid-alt' },
        { path: '/descobrir', label: 'Descobrir', icon: 'bi bi-compass' },
        { path: '/meu-espaco', label: 'Meu espaço', icon: 'bx bx-book-alt' },
        { path: '/grupos', label: 'Grupos', icon: 'bi bi-people' },
        { path: '/mensagens', label: 'Mensagens', icon: 'bi bi-chat-left-text' },
        { path: '/configurações', label: 'Configurações', icon: 'bi bi-gear' }
    ];

    return (
        <div className="sidebar">
            <div className="logo-details">
                <i className="bx bx-brain"></i>
                <span className="logo_name">Virtual Genie</span>
            </div>
            <ul className="nav-links">
                {menuItems.map((item) => (
                    <li key={item.path} data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title={item.label}>
                        <Link to={item.path}>
                            <i className={item.icon}></i>
                            <span className="links_name">{item.label}</span>
                        </Link>
                    </li>
                ))}
                <li className="log_out" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-title="Deslogar">
                    <Link to={"/login"}>
                        <i className="bi bi-box-arrow-left"></i>
                        <span className="links_name">Log out</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;