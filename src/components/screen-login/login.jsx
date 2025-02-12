import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './login.scss';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const usuarioValido = "admin";
  const senhaValida = "123456";

  const handleLogin = () => {
    if (usuario === usuarioValido && senha === senhaValida) {
      navigate('/dashboard');
    } else {
      setErro("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className='container-login'>
      <div className='box-login'>
        <div className='box-left'>
          <div className='left-text'>
            <h2>Welcome Back!</h2>
          </div>
          <h3>OdontoSmartSys</h3>
          <img className='img' src="../assets/img/img pc.png" alt="imagem computador"/>
        </div>

        <div className='box-right'>
          <h2>Login</h2>
          {erro && <p className="erro">{erro}</p>}
          <input 
            type="text" 
            placeholder="Usuário" 
            className="input" 
            value={usuario} 
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Senha" 
            className="input" 
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
          />
          <button className="btn-login" onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
}

// Exportando o componente Login
export default Login;
