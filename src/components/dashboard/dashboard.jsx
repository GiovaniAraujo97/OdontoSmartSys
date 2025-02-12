import React, { useState } from 'react';
import './dashboard.scss';

function Dashboard() {
  const [showAgenda, setShowAgenda] = useState(false);
  const [showProntuario, setShowProntuario] = useState(false);

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <div className="logo">
          <img src="../assets/img/oss-logo.png" alt="img-logo" />
        </div>

        <ul className="menu">
          <li className="menu-item">
            <p className="menu-title">Painel de Controle</p>
          </li>
          
          <li className="menu-item">
            <p className="menu-title">Agenda</p>
            <span 
              className={`submenu-toggle ${showAgenda ? 'open' : ''}`}
              onClick={() => setShowAgenda(!showAgenda)}
            >
              {showAgenda ? '▲' : '▼'}
            </span>
            {showAgenda && (
              <ul className="submenu">
                <li>Visualizar Agenda</li>
                <li>Adicionar Compromisso</li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <p className="menu-title">Prontuário Eletrônico</p>
            <span 
              className={`submenu-toggle ${showProntuario ? 'open' : ''}`}
              onClick={() => setShowProntuario(!showProntuario)}
            >
              {showProntuario ? '▲' : '▼'}
            </span>
            {showProntuario && (
              <ul className="submenu">
                <li>Visualizar Prontuário</li>
                <li>Adicionar Registro</li>
              </ul>
            )}
          </li>

          <li className="menu-item">
            <p className="menu-title">Pagamentos</p>
          </li>
          
          <li className="menu-item">
            <p className="menu-title">Configurações</p>
          </li>
        </ul>
      </div>

      {/* Conteúdo principal */}
      <div className="content">
        <h1>Bem-vindo ao Painel!</h1>
        <p>Você está logado.</p>
      </div>
    </div>
  );
}

export default Dashboard;
