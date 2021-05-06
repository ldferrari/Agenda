import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Menu/Menu';
import NomeRegister from '../components/AgendaRegisterPage/NomeRegister';
import SobrenomeRegister from '../components/AgendaRegisterPage/SobrenomeRegister';
import TelefoneRegister from '../components/AgendaRegisterPage/TelefoneRegister';
import NascimentoRegister from '../components/AgendaRegisterPage/NascimentoRegister';
import EmailRegister from '../components/AgendaRegisterPage/EmailRegister';
import EnderecoRegister from '../components/AgendaRegisterPage/EnderecoRegister';
import CEPRegister from '../components/AgendaRegisterPage/CEPRegister';
import ButtonRegister from '../components/AgendaRegisterPage/ButtonRegister';
import '../css/agendaRegister.css';

export default function agendaRegisterPage() {
  const token = localStorage.getItem('token') || null;
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="agendaRegister">
      <Menu title="Novo Cadastro" />
      <div className="lineCadastro">
        <NomeRegister />
        <SobrenomeRegister />
        <TelefoneRegister />
        <NascimentoRegister />
        <EmailRegister />
        <EnderecoRegister />
        <CEPRegister />
        <ButtonRegister />
      </div>
    </div>
  );
}
