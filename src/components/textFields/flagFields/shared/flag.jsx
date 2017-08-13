import React from 'react';
import setClassName from '../../../../helpers/setClassName';

const Flag = ({ className, offset }) => {
  const style = offset ? {
                          'backgroundImage': "url(/images/flags.png)",
                          'backgroundPositionX': '0px',
                          'backgroundPositionY': offset
                        } : {}
  return (
    <div className={setClassName(['flag', className])} style={style}></div>
  );
};

export default Flag;
