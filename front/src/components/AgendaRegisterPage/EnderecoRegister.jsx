import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function EnderecoRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="address" className="labelARegistro">
        Endereço
        <input
          type="text"
          id="address"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              address: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}
