import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function TelefoneRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="fone" className="labelARegistro">
        Telefone
        <input
          type="text"
          id="fone"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              fone: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}
