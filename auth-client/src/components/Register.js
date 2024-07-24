import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';

const Register = () => {
  const [formData, setFormData] = useState({
    iduser: '',
    nomuser: '',
    apellido: '',
    email: '',
    password: '',
  });

  const { iduser, nomuser, apellido, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', formData);
      alert('Registro exitoso!');
      console.log(res.data);
    } catch (err) {
      console.error(err.response ? err.response.data : 'Error desconocido');
      alert('Error en el registro');
    }
  };

  return (
    <Card title="Registro" className="p-m-4">
      <form onSubmit={onSubmit}>
        <div className="p-field">
          <label htmlFor="iduser">ID Usuario</label>
          <InputNumber id="iduser" name="iduser" value={iduser} onValueChange={e => onChange({ target: { name: 'iduser', value: e.value } })} />
        </div>
        <div className="p-field">
          <label htmlFor="nomuser">Nombre</label>
          <InputText id="nomuser" name="nomuser" value={nomuser} onChange={onChange} />
        </div>
        <div className="p-field">
          <label htmlFor="apellido">Apellido</label>
          <InputText id="apellido" name="apellido" value={apellido} onChange={onChange} />
        </div>
        <div className="p-field">
          <label htmlFor="email">Correo Electrónico</label>
          <InputText id="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="p-field">
          <label htmlFor="password">Contraseña</label>
          <InputText id="password" name="password" type="password" value={password} onChange={onChange} />
        </div>
        <Button label="Registrar" type="submit" />
      </form>
    </Card>
  );
};

export default Register;
