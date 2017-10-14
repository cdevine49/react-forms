import React from 'react';
import setClassName from '../helpers/setClassName';
import withErrors from './withErrors'

const Input = ({onChange, onFocus, onBlur, className, ...props}) => {

  return (
    <input
      className={setClassName([className, (props.errorMessage && 'error')])}
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
  className: '',
  required: false,
  errors: [],
  onChange: function(){},
  onFocus: function(){},
  onFocus: function(){},
  validate: function(){}
}

export default withErrors(Input);