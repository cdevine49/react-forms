import React from 'react';
import setClassName from '../helpers/setClassName'

const Submit = ({...props}) => {

  return (
    <input
      type='submit'
      {...props}
      />
  )
}

Submit.defaultProps = {
  className: 'react-form-submit',
  value: 'Submit'
}

export default Submit
