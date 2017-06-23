import React from 'react';

const Flag = ({className, offset, name, code}) => {
  var className = 'flag ' + className;
  return (
    <div className={className} style={{'backgroundImage': "url(/images/flags.png)", 'backgroundPositionX': '0px', 'backgroundPositionY': offset}}></div>
  );
};

export default Flag;
