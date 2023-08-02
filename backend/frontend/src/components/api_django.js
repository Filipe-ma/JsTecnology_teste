import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DjangoData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/data/'); // Substitua pela URL da sua API do Django
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados do Django:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', backgroundColor: '#333', padding: '10px' }}>
        <img src="/recursos/back.png" alt="Logo" style={{ height: '50px', marginRight: '10px' }} />
        <h1 style={{ color: 'white' }}>Navbar com Logo</h1>
      </nav>
      {data ? (
        <div>
          <h2>Dados da API do Django</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};

export default DjangoData;
