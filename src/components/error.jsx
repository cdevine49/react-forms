import React from 'react';
import setClassName from '../helpers/setClassName';

const Error = ({children, className, ...props}) => {
  if (children) {
    return ( <p className={setClassName(['error-message', className])} { ...props }>{children}</p> );
  } else {
    return null;
  }
}

export default Error;
