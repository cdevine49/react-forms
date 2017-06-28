import React from 'react';
import FlagContainer from './flagContainer';
import FlagArray from '../helpers/countries';

const Phone = (props) => {
  const onChangeCountry = idx => {
      props.onChangeCountry(FlagArray[idx][2])
  };

  return (
    <FlagContainer {...props} onChangeCountry={onChangeCountry} />
  )
};

Phone.defaultProps = {
  code: true,
  countryIndex: 0,
  onChange: function(){},
  onChangeCountry: function(){},

}

export default Phone;