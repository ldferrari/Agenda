import React from 'react';

export default function AgendaMain(client) {
  return (
    <div className="lineAgenda">
      <div className="data">{client.client.name}</div>
      <div className="data">{client.client.lastName}</div>
      <div className="data">{client.client.fone}</div>
      <div className="data">{client.client.birthDate}</div>
      <div className="data emailData">{client.client.email}</div>
      <div className="data enderecoData">{client.client.address}</div>
      <div className="data">{client.client.zipCode}</div>
    </div>
  );
}
