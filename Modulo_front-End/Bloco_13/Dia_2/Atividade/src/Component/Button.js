import React from "react";
import PropTypes from 'prop-types';
import "./button.css";

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={onClick}
    className={`button-text ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
