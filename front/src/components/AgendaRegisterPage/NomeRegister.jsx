import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function NomeRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="name" className="labelARegistro">
        Nome
        <input
          type="text"
          id="name"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              name: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}
