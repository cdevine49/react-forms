import React from 'react';
import FlagBox from './flagBox';
import Input from './input';

const FlagInput = ({countryIndex, flag, name, code, onChangeText, onClick, ...props}) => {
  return (
    <div className="input-container flag-input-container">
      <FlagBox
        countryIndex={countryIndex}
        onClick={onClick}
        />
      <input onChange={onChangeText} {...props} />
    </div>
  );
}

FlagInput.defaultProps = {
  countryIndex: 0,
  onClick: () => {}
}

export default FlagInput;