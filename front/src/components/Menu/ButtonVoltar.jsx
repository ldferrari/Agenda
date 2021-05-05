import React from 'react';
import { Link } from 'react-router-dom';
import voltarButton from '../../image/voltar.png';

export default function ButtonConfig() {
  return (
    <Link
      to="/agenda"
      className="link-voltar"
    >
      <button className="button-voltar">
        <img src={ voltarButton } className="img-voltar" />
      </button>
    </Link>
  );
}