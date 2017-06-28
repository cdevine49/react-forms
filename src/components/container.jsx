import React from 'react';
import withErrors from './withErrors';
import Error from './error';
import setClassName from '../helpers/setClassName';

const Container = ({ containerClass,
                     labelText, labelClass,
                     id, inputClass,
                     underline, onChange,
                     validate, required, errors,
                     displayErrors, errorMessage,
                     ...props
                   }) => {
  return (
    <div className={setClassName('input-container', containerClass)}>
      {labelText && <label htmlFor={id} className={labelClass}>{labelText}</label>}
      <input
        id={id}
        className={setClassName(inputClass, (errorMessage && 'error'))}
        onChange={function(e){onChange(e.currentTarget.value)}}
        {...props}
        />
      <Error errorMessage={errorMessage} />
      {underline && <p>{underline}</p>}
    </div>
  );
}

Container.defaultProps = {
  type: 'text',
  value: '',
  errors: [],
  onChange: function(){},
  validate: function(){}
}

export default withErrors(Container);
