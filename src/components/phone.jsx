import React from 'react';
import FlagContainer from './flagContainer';
import FlagArray from '../helpers/countries';

const Phone = (props) => {
  return (
    <FlagContainer {...props} />
  )
};

Phone.defaultProps = {
  code: FlagArray[2],
  name: FlagArray[1],
  onChange: function(){},
  onChangeCountry: function(){},

}

export default Phone;