import React from 'react';
import withErrors from './withErrors';
import Error from './error';
import { setClassName } from '../helpers';

const Container = ({ containerClass,
                     labelText, labelClass,
                     id, inputClass,
                     underline,
                     validate, required, errors,
                     errorMessage, displayErrors,
                     ...props
                   }) => {
  return (
    <div className={setClassName('input-container', containerClass)}>
      {labelText && <label htmlFor={id} className={labelClass}>{labelText}</label>}
      <input
        id={id}
        className={setClassName(inputClass, (errorMessage && displayErrors && 'error'))}
        {...props}
        />
      <Error errorMessage={errorMessage} displayErrors={displayErrors} />
      {underline && <p>{underline}</p>}
    </div>
  );
}

Container.defaultProps = {
  type: 'text',
  value: '',
  errors: [],
  onChange: () => {},
  validate: () => {}
}

export default withErrors(Container);
