import React from 'react';
import setClassName from '../helpers/setClassName';

const Error = ({children, className, ...props}) => {
  if (children) {
    return ( <span className={setClassName(['error-message', className])} { ...props }>{children}</span> );
  } else {
    return null;
  }
}

export default Error;
