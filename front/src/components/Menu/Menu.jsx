import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ButtonVoltar from './ButtonVoltar';
import ButtonConfig from './ButtonConfig';
import ButtonLogout from '../ButtonLogout';
import AppContext from '../../context/AppContext';
import '../../css/menu.css';

const buttonVoltar = (title) => {
  if(title !== "Agenda")
    return <ButtonVoltar />
}

export default function Menu({ title }) {
  const { userData } = useContext(AppContext);
  return (
    <div className="menu-top">
      <div className="voltar-name">
        {buttonVoltar(title)}
        <div className="name-login">
          {userData.name}
        </div>
      </div>
      <div className="menu-title">{ title }</div>
      <div className="logout-config" >
        <ButtonLogout rota="/" texto="Logout"/>
        <ButtonConfig />
      </div>
    </div>
  );
}

Menu.propTypes = {
  title: PropTypes.string,
};
