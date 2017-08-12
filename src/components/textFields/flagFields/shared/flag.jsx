import React from 'react';
import setClassName from '../../../../helpers/setClassName';

const Flag = ({ className, offset }) => {
  var className = setClassName(['flag', className]);
  return (
    <div className={className} style={{'backgroundImage': "url(/images/flags.png)", 'backgroundPositionX': '0px', 'backgroundPositionY': offset}}></div>
  );
};

export default Flag;
