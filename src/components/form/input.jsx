import React from 'react';
import styles from './Input.module.css';

function Input({
  id,
  label,
  placeHolder,
  type,
  max,
  min,
  step,
  inputValue,
  name,
  maxInputLength,
  handleChange,
}) {
  return (
    <div>
      <label
        htmlFor={ id }
      >
        { label }
      </label>

      <input
        className={ styles.input }
        type={ type }
        id={ id }
        placeholder={ placeHolder }
        min={ min }
        max={ max }
        step={ step }
        maxLength={ maxInputLength }
        value={ inputValue }
        name={ name }
        onChange={ (event) => handleChange(event) }
      />
    </div>
  );
}

Input.propTypes = {}.isRequired;

export default Input;
