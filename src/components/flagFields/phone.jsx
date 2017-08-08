import React from 'react';
import FlagFieldContainer from '../flagFieldContainer';
import FlagArray from '../../helpers/countries';

const Phone = (props) => {
  const onChangeCountry = idx => {
      props.onChangeCountry(FlagArray[idx][2])
  };

  return (
    <FlagFieldContainer {...props} onChangeCountry={onChangeCountry} />
  )
};

Phone.defaultProps = {
  code: true,
  countryIndex: 0,
  onChange: function(){},
  onChangeCountry: function(){},

}

export default Phone;