import React from 'react';
import { removeSpaces } from '../../helpers/removeSpaces';

const Input = ({ label, register, errors, ...rest }) => {
  const instractions = {
    id: '(9 Numbers)',
    cellPhone: '(10 Numbers)',
    officePhone: '(7 Numbers)',
    computerName: '(5 Numbers)',
  };
  return (
    <div className="field form-element">
      <label>
        {label} <span style={{ color: '#B0A8A1' }}>{instractions[removeSpaces(label)]}</span>
      </label>
      {register ? (
        <>
          {rest.type === 'textarea' ? (
            <textarea {...register(removeSpaces(label))} rows="4" cols="50" style={{ resize: 'none' }} {...rest} />
          ) : (
            <input {...register(removeSpaces(label))} {...rest} />
          )}
        </>
      ) : (
        <>{rest.type === 'textarea' ? <textarea rows="4" cols="50" style={{ resize: 'none' }} {...rest} /> : <input {...rest} />}</>
      )}

      {errors && errors.message && <p style={{ color: '#DC3545' }}>{errors.message.message}</p>}
    </div>
  );
};
export default Input;
