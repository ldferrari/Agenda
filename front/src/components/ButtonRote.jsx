import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/agenda.css';

export default function RoteButton(props) {
  const { rota, texto } = props;
  return (
    <Link
      className="buttonGeneral"
      to={ rota }
    >
      <button className="buttonMenu">
        { texto }
      </button>
    </Link>
  );
}

RoteButton.propTypes = {
  rota: PropTypes.string,
  texto: PropTypes.string,
};
