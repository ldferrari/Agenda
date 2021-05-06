import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function SobrenomeRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="lastName" className="labelARegistro">
        Sobrenome
        <input
          type="text"
          id="lastName"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              lastName: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}
