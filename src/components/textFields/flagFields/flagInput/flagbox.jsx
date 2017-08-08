import React from 'react';
import Flag from '../shared/flag';
import FlagArray from '../shared/countries';

const Flagbox = ({onClick, countryIndex, errors, focus}) => {
  const [offset, name, code] = FlagArray[countryIndex];
  return (
    <div className={'flagbox' + (focus ? ' focus' : '') + ( errors ? ' error' : '')} onClick={onClick} onMouseDown={ e => focus && e.preventDefault()}>
      <Flag name={name} code={code} offset={offset} />
      <img src="/images/select-box-button.png" className='select-box-button' />
    </div>
  );
};

export default Flagbox;
