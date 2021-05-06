import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function NascimentoRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="birthDate" className="labelARegistro">
        Data de Nascimento
        <input
          type="text"
          id="birthDate"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              birthDate: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}