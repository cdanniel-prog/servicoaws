import React, { useState } from 'react'; // Importa React e o hook useState

function App() {
  // Define um estado para a mensagem
  const [mensagem, setMensagem] = useState('Olá, mundo!');

  // Função para atualizar a mensagem
  const atualizarMensagem = () => {
    setMensagem('Você clicou no botão!');
  };

  return (
    <div style={styles.container}>
      <h1>{mensagem}</h1> {/* Exibe a mensagem */}
      <button onClick={atualizarMensagem} style={styles.button}>
        Clique aqui
      </button>
    </div>
  );
}

// Estilos simples
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;