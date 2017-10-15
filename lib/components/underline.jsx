import React from 'react';
import StyledUnderline from '../elements/underline';
const Underline = ({children, ...props}) => {
  if (children) {
    return ( <StyledUnderline { ...props }>{children}</StyledUnderline> );
  } else {
    return null;
  }
}

export default Underline;
