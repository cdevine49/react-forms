import React from 'react';

const Legend = ({children, ...props}) => {
  if (children) {
    return ( <legend {...props}>{children}</legend> );
  } else {
    return null;
  }
}

export default Legend;
