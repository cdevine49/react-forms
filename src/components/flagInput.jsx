import React from 'react';
import FlagBox from './flagBox';
import Input from './input';

const FlagInput = ({countryIndex, selectingCountry, ...props}) => {
  return (
    <div className="input-container flag-input-container">
      <FlagBox
        countryIndex={countryIndex}
        onClick={() => this.selectingCountry(!selectingCountry)}
        />
      <Input {...props} />
    </div>
  );
}

FlagInput.defaultProps = {
  countryIndex: 0,
  selectingCountry: false
}

export default FlagInput;