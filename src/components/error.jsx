import React from 'react';

const Error = ({displayErrors, errorMessage}) => {
  if (displayErrors && errorMessage) {
    return ( <span className='error-message'>{errorMessage}</span> );
  } else {
    return null;
  }
}

export default Error;
