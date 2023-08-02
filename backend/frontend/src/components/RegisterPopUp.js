import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    phone: '',
    lingua: 'portugues', // Valor padrão para o campo 'lingua'
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/core/api/v1/core/', formData)
      .then((response) => {
        console.log('Dados enviados com sucesso:', response.data);
        onClose(); // Fechar o formulário após o envio bem-sucedido
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error.response);
        // Trate o erro conforme necessário
      });
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
        <h1 style={{ color: '#018749', marginTop: '5px' }}>Submeter Dados</h1>
        <h4 style={{ color: '#556B2F', marginTop: '-15px' }}>Torne-se um membro</h4>
       
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
            <select id="lingua" value={formData.lingua} name="lingua" onChange={handleChange} style={{ background:'#018749', marginTop:'1px', border:'#7FFF00', color:'#7FFF00', marginRight:'105px', borderRadius: '3px', padding: '5px' }}>
              <option value="portugues">Português</option>
              <option value="ingles">Inglês</option>
              <option value="espanhol">Espanhol</option>
            </select>
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginRight: '180px' }} htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" placeholder='name' value={formData.nome} onChange={handleChange} style={{ background:'#F8F8F8', border:'white', borderRadius: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginRight: '180px' }}  htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" placeholder='e-mail' value={formData.email} onChange={handleChange} style={{ color:'#556B2F', background:'#F8F8F8', border:'white', borderRadius: '10px', padding: '5px' }} />
          </div>
          <div style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column' }}>
            <label style={{ marginRight: '180px' }} htmlFor="telefone">Telefone</label>
            <input type="text" id="telefone" name="phone" placeholder='telefone' value={formData.phone} onChange={handleChange} style={{ background:'#F8F8F8', border:'white', borderRadius: '10px', padding: '5px' }} />
          </div>
          <div>
            <button style={{ color: '10px' }} type="submit">Cadastrar</button><br/>
            <button type="button" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
