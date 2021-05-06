import React from 'react';

export default function AgendaMain(client) {
  return (
    <div className="linetitle">
      <div className="titleData">NOME</div>
      <div className="titleData">SOBRENOME</div>
      <div className="titleData">TELEFONE</div>
      <div className="titleData">NASCIMENTO</div>
      <div className="titleData emailData">E-MAIL</div>
      <div className="titleData enderecoData">ENDEREÇO</div>
      <div className="titleData">CEP</div>
    </div>
  );
}