import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

export default function EmailRegister() {
  const { clientData, setClientData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="email" className="labelARegistro">
        E-mail
        <input
          type="text"
          id="email"
          className="inputARegistro"
          onChange={ ((event) => {
            setClientData({
              ...clientData,
              email: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}
