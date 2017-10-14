import React from 'react';
import setClassName from '../helpers/setClassName';

const Underline = ({children, className, ...props}) => {
  if (children) {
    return ( <p className={setClassName(['underline', className])} { ...props }>{children}</p> );
  } else {
    return null;
  }
}

export default Underline;
