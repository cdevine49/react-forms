import React from 'react';
import setClassName from '../helpers/setClassName'

const Submit = ({className, ...props}) => {

  return (
    <input
      type='submit'
      className={setClassName(['react-form-submit', className])}
      {...props}
      />
  )
}

Submit.defaultProps = {
  value: 'Submit'
}

export default Submit
