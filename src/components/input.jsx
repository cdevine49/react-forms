import React from 'react';
import setClassName from '../helpers';
import withErrors from '../withErrors'

const Input = ({onFocus, onBlur, ...props}) => {
  
  return (
    <input
      className={setClassName(className, (props.errorMessage && props.displayErrors && 'error'))}
      onChange={ onChange }
      onFocus={ props.onFocus }
      onBlur={ props.onBlur }
      {...props}
      />
  )
}

Input.defaultProps = {
  type: 'text',
  value: '',
  required: false,
  errors: [],
  onChange: () => {},
  onFocus: () => {},
  onFocus: () => {},
  validate: () => {}
}

export default withErrors(Input);