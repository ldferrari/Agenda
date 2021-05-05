import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginButtonRegister() {
  return (
    <div className="semContaDiv">
      <Link to="/register" className="link">
        <button
          type="button"
          className="semContaButton"
        >
          Cadastrar
        </button>
      </Link>
    </div>
  );
}
