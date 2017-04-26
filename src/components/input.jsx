import React from 'react';
import setClassName from '../helpers';

const Input = ({className, displayErrors, errorMessage, ...props}) => {

  return (
    <input
      {...props}
      />
  )
}

// Input.defaultProps = {
//   type: 'text',
//   value: '',
//   onChange: () => {},
//   onFocus: () => {},
//   onBlur: () => {},
// }

export default Input;