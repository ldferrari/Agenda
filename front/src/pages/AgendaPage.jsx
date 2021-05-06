import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Menu from '../components/Menu/Menu';
import clientsData from '../services/fetchClientsData';
import BotaoNovo from '../components/ButtonRote';
import TitleData from '../components/AgendaPage/TitleData';
import AgendaMain from '../components/AgendaPage/AgendaMain';
import '../css/agenda.css';

function orderByName(response) {
  response.sort(function (a, b) {
    if(a.name < b.name) {
      return -1;
    } else {
      return true;
    }
  });
  return response
}

export default function AgendaPage() {
  const { allClients, setAllClients } = useContext(AppContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const idUser = user.id;
    clientsData(idUser).then((response) => setAllClients(orderByName(response)));
  }, []);
  const token = localStorage.getItem('token') || null;
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="agendaPage">
      <Menu title="Agenda" />
      <div className="agendaBody">
        <BotaoNovo rota="/agenda/register" texto="Novo Cadastro"/>
        <TitleData />
        {
          allClients ?
          allClients.map((client) => (
            <AgendaMain key={ client.id } client={client} />
          )):
          "Carregando..."
        }
      </div> 
    </div>
  );
}
