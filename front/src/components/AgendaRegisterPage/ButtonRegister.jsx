import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import fetchClientsRegister from '../../services/fetchClientsRegister';

export default function ButtonRegister() {
  const user = JSON.parse(localStorage.getItem('user')) || null;
  const { clientData, setClientData } = useContext(AppContext);
  useEffect(() => {
    setClientData({
      idUser: user.id,
      ...clientData,
    });
  }, []);
  return (
    <div>
      <Link
        to={ "/agenda" }
        onClick={ async () => {
          await fetchClientsRegister(clientData)
        } }
      >
        <button
          type="button"
          className="cadastrar ButtonRegister"
        >
          Cadastrar
        </button>
      </Link>
    </div>
  );
}
