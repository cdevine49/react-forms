import React from 'react';
import Flag from '../shared/flag';
import setClassName from '../../../../helpers/setClassName';

const Country = ({offset, name, value, onClick, className}) => {
  return (
    <li className={setClassName(['country', className])}>
      <button onClick={onClick}>
        <Flag offset={offset} />
        {name && <span className='name'>{name}</span>}
        {value && <span className='value'>{value}</span>}
      </button>
    </li>
  );
};

Country.defaultProps = {
  onClick: function(){}
}

export default Country;
