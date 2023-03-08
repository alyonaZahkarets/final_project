import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

const Button = (props) => {
  return (
    <Link to={props.to} className="button header__button">
      {props.children}
    </Link>
  );
};

export default Button;
