import React from 'react';
import { Label as StyledLabel, Required } from '../elements/label'

const Label = ({ children, required, ...props }) => {
  if (children) {
    return (
      <StyledLabel { ...props }>
        { children }
        { required && <Required>*</Required> }
      </StyledLabel>
    );
  } else {
    return null;
  }
}

export default Label;
