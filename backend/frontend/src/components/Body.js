import React, { useState } from 'react';
import axios from 'axios';


function Body() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    phone: '',
    lingua: 'portugues',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLinkClick = () => {
    // Simulação de uma chamada à API
    axios.post('http://localhost:8000/core/api/v1/core/', formData)
      .then((response) => {
        setSuccessMessage('Dados enviados com sucesso: ' + response.data);
      })
      .catch((error) => {
        setErrorMessage('Erro ao enviar os dados: ' + error.response);
      });
  };
   


  return (
    <div style={{ paddingLeft: '100px', backgroundImage: 'url(/recursos/background1.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh', textAlign: 'left', marginTop: '-40px' }}>
       <div>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
    <div style={{ marginLeft:'150px', marginTop: '120px', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
      <h1 style={{ color:'#568203', paddingLeft: '12px' }}>Remember you <br/> have to atttrbute <br/>  pixel perfect</h1>
     <h3 style={{ color:'white', marginTop: '10px', paddingLeft: '10px' }}>Abordagens de adultos em situacao de urgencia e <br/> emergencia na Atencao Basica. Avaliacao primaria. Esse<br/> conteudo, pela sua importancia e complexidade eh mais.</h3>
    
     <a href='http://127.0.0.1:8000/core/usuarios/' style={{ width:'120px', color: 'green', background: '#7FFF00', marginRight: '90px', border: 'none', borderRadius: '5%', padding: '5px', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center' }}>
     <h3 style={{ margin: '0 5px', fontSize: '16px', fontWeight: 'normal' }}>Link excell</h3>
          <img src="/recursos/edit.png" alt="Options" style={{ height: '15px',  background: '#7FFF00', color: 'green'}} />
          
        </a>

        <footer style={{ backgroundColor: 'transparent', color: 'white', marginLeft: '-900px', marginTop: '150px', textAlign: 'center', padding: '10px' }}>
          <img src="/recursos/linkedin.png" alt="Linkedin" style={{ cursor:'pointer', height: '20px', marginRight: '10px' }} />
          <img src="/recursos/facebook.png" alt="Facebook" style={{ cursor:'pointer', height: '20px', marginRight: '10px' }} />
          <img src="/recursos/twitter.png" alt="LinkedIn" style={{ cursor:'pointer', height: '20px', marginRight: '10px' }} />
          <img src="/recursos/envelope.png" alt="LinkedIn" style={{ cursor:'pointer', height: '20px', marginRight: '10px' }} />
          <p>Copypryte© {new Date().getFullYear()} JsTechonlogy Lda. All Rights Reserved</p>
       </footer>

    </div>
   
 </div>
  );
}

export default Body;
