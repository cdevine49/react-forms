import React from 'react';
import FlagBox from './flagBox';
import Input from './input';

const FlagInput = ({countryIndex, flag, name, code, onClick, ...props}) => {
  return (
    <div className="input-container flag-input-container">
      <FlagBox
        countryIndex={countryIndex}
        onClick={onClick}
        />
      <input {...props} />
    </div>
  );
}

FlagInput.defaultProps = {
  countryIndex: 0,
  onClick: function(){}
}

export default FlagInput;