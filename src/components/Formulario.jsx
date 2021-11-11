import React, { useState } from 'react'

const Formulario = () => {

  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');

  const validar = (event) => {
    event.preventDefault();
    if(!nombre.trim() || !edad.trim()){
      console.log('nombre o edad vacio')
      return;
    }
    
  }

  return (
    <div className="container">
      <form className="form-group" onSubmit={validar}>
        <input className="form-control mb-3"
          type="text"
          placeholder="Introduce el nombre"
          onChange={(e) => {setNombre(e.target.value)}}
        />
        <input className="form-control mb-3"
          type="text"
          placeholder="Introduce la edad"
          onChange={(e) => {setEdad(e.target.value)}}
        />
        <input className="btn btn-info btn-block mb-3"
          type="submit"
        />
      </form>
    </div>
  );
}

export default Formulario;
