import React from 'react';
import styled from 'styled-components';

const Underline = ({ children, ...props }) => {
  if (children) {
    return React.createElement(styled.p`
      min-height: 17px;
      margin: 4px 0 2px;
      font-size: 12px;
      color: #767676;
    `, props, children);
  }
  return null;
};

export default Underline;