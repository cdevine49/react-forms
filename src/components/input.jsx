import React from 'react';
import setClassName from '../helpers';
import withErrors from '../withErrors'

const Input = ({onFocus, onBlur, ...props}) => {

  return (
    <input
      className={setClassName(className, (props.errorMessage && 'error'))}
      onChange={ onChange }
      onFocus={ onFocus }
      onBlur={ onBlur }
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