import React, { useState } from 'react';
import RegisterPopup from './RegisterPopUp'; // Verifique o nome correto do arquivo do componente RegisterPopup
import Body from './Body';

const Navbar = () => {
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const handleRegisterButtonClick = () => {
    setShowRegisterPopup(true);
  };

  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', padding: '15px 150px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/recursos/logo.png" alt="Logo" style={{ height: '100px', marginRight: '15px' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h5 style={{ marginTop: '0px',   color: '#568203', marginRight: '10px', fontFamily: 'Arial, Courier, monospace, sarifa' }}>HOME</h5>
          <button  style={{ cursor:'pointer', marginTop: '-20px', marginRight: '20px', backgroundColor: 'white', border: 'none' }}>
            <img src="/recursos/home.png" alt="Home" style={{ height: '20px' }} />
          </button>
          <h5 style={{ marginTop: '0px',   color: '#568203', marginRight: '10px', fontFamily: 'Arial, Courier, monospace, sarifa' }}>CADASTRA-SE</h5>
          <button onClick={handleRegisterButtonClick} style={{ cursor:'pointer', marginTop: '-20px',   marginRight: '20px', backgroundColor: 'white', border: 'none' }}>
            <img src="/recursos/edit.png" alt="Cadastrar" style={{ height: '20px', backgroundColor: 'white', border: 'none' }} />
          </button>
          <button style={{ cursor:'pointer', marginTop: '-20px',  color: 'white', background: '#00563B', marginRight: '20px', border: 'none', borderRadius: '8%', padding: '5px', fontFamily: 'Arial, sans-serif', display: 'flex', alignItems: 'center' }}>
            <img src="/recursos/envelope.png" alt="Options" style={{ height: '15px', background: '#00563B', color: '#00563B'}} />
            <h3 style={{ margin: '0 5px', fontSize: '16px', fontWeight: 'normal' }}>Português</h3>
          </button>
        </div>
      </nav>
      <Body/>
      {showRegisterPopup && <RegisterPopup onClose={() => setShowRegisterPopup(false)} />}
    </div>
  );
};

export default Navbar;
