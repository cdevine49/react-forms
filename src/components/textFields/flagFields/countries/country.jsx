import React from 'react';
import Flag from '../shared/flag';
import setClassName from '../../../../helpers/setClassName';

const Country = ({offset, name, code, onClick, className}) => {
  return (
    <li className={setClassName(['country', className])} onClick={onClick}>
      {offset && <Flag name={name} code={code} offset={offset} />}
      {name && <span className='name'>{name}</span>}
      {code && <span className='code'>{code}</span>}
    </li>
  );
};

Country.defaultProps = {
  onClick: function(){}
}

export default Country;
