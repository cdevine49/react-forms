import React from 'react';
import FlagField from './index';

const Phone = (props) => {
  const onChangeCountry = idx => {
      props.onChangeCountry(FlagArray[idx][2])
  };

  return (
    <FlagField {...props} onChangeCountry={onChangeCountry} />
  )
};

Phone.defaultProps = {
  code: true,
  countryIndex: 0,
  onChange: function(){},
  onChangeCountry: function(){},

}

export default Phone;