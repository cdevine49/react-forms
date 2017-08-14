import React from 'react';
import setClassName from '../helpers/setClassName'

const Submit = ({className, value, ...props}) => {

  return (
    <button
      type='submit'
      className={setClassName(['react-form-submit', className])}
      {...props}
      >
      {value}
    </button>
  )
}

Submit.defaultProps = {
  value: 'Submit'
}

export default Submit
