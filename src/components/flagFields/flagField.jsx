import React from 'react';
import FlagBox from './flagBox';

const FlagField = ({countryIndex, onClick, ...props}) => {
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

FlagField.defaultProps = {
  countryIndex: 0,
  onClick: function(){}
}

export default FlagField;