import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function CEPRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="zipCode" className="labelARegistro">
        CEP
        <input
          type="text"
          id="zipCode"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              zipCode: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}