import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);
      alert('Inicio de sesión exitoso!');
      console.log(res.data);
    } catch (err) {
      console.error(err.response ? err.response.data : 'Error desconocido');
      alert('Error en el inicio de sesión');
    }
  };

  return (
    <Card title="Inicio de Sesión" className="p-m-4">
      <form onSubmit={onSubmit}>
        <div className="p-field">
          <label htmlFor="email">Correo Electrónico</label>
          <InputText id="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="p-field">
          <label htmlFor="password">Contraseña</label>
          <InputText id="password" name="password" type="password" value={password} onChange={onChange} />
        </div>
        <Button label="Iniciar Sesión" type="submit" />
      </form>
    </Card>
  );
};

export default Login;
