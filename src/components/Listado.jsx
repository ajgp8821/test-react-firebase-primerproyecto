import React, { Fragment, useState } from 'react'

const Listado = () => {

  const [numeros, setNumeros] = useState([1, 2, 3]);

  return (
    <Fragment>
      <h1>Listado:</h1>
      <ul>
        {
          numeros.map((item, index) => 
            <li key={index}>{item}</li>
          )
        }
      </ul>
    </Fragment>
  );
}

export default Listado;
