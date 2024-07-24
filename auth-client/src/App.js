import React from 'react';
import FlipCard from './components/FlipCard';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema
import 'primereact/resources/primereact.min.css';           // Estilos de PrimeReact
import 'primeicons/primeicons.css';                          // Iconos de PrimeIcons
import './index.css';                                       // Estilos personalizados

function App() {
  return (
    <div className="App p-d-flex p-flex-column p-ai-center p-p-4">
      <h1>Autenticación</h1>
      <FlipCard />
    </div>
  );
}

export default App;
