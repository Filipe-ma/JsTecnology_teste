import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Função para buscar os usuários da API
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/core/api/v1/core/');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    // Chamar a função para buscar os usuários quando o componente for montado
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>Nome:</strong> {user.nome}, <strong>Email:</strong> {user.email}, <strong>Telefone:</strong> {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
