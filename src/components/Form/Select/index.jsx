import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

function Select({
  id,
  label,
  options,
  inputValue,
  name,
  handleChange,
  loading,
  disabled,
}) {
  return (
    <div className={ styles['select-container'] }>
      <label
        htmlFor={ id }
      >
        { label }
      </label>

      <select
        id={ id }
        value={ inputValue }
        name={ name }
        onChange={ (event) => handleChange(event) }
        disabled={ disabled }
        className={ loading ? `${styles.select} ${styles.loading}` : styles.select }
      >
        { options.map((option) => (
          <option
            key={ option }
            value={ option }
          >
            { option }
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.string,
  inputValue: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
}.isRequired;

export default Select;
