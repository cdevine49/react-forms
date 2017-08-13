import React from 'react';
import Flag from '../shared/flag';
import FlagArray from '../shared/countries';

const Flagbox = ({onClick, countryIndex}) => {
  const [offset, name, code] = FlagArray[countryIndex];
  return (
    <button type="button" className={'flagbox'} onClick={onClick}>
      <Flag offset={offset} />
      <img src="/images/select-box-button.png" className='select-box-button' />
    </button>
  );
};

export default Flagbox;
