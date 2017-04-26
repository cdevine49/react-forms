import React from 'react';
import withErrors from './withErrors';
import Error from './error';
import Input from './input';
import { setClassName } from '../helpers';

class Container extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { containerClass,
            labelText, labelClass,
            id, inputClass,
            underline,
            validate, required, errors, onChange,
            errorMessage, displayErrors, onBlur, onFocus, handleErrors,
            ...props
          } = this.props;
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
}

Container.defaultProps = {
  type: 'text',
  value: '',
  errors: [],
  onChange: () => {},
  validate: () => {}
}

export default withErrors(Container);
