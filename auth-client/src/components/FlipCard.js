import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'; // Asegúrate de importar Button aquí
import './FlipCard.css'; // Importa los estilos para el efecto de giro

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => setFlipped(!flipped);

  return (
    <div className="flip-card-container">
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <Card title="Inicio de Sesión" className="p-m-4">
            <Login />
            <Button label="Ir a Registro" onClick={flipCard} className="p-mt-2" />
          </Card>
        </div>
        <div className="flip-card-back">
          <Card title="Registro" className="p-m-4">
            <Register />
            <Button label="Volver a Iniciar Sesión" onClick={flipCard} className="p-mt-2" />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
