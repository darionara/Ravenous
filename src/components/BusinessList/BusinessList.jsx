import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

const BusinessList = (/* props */) => {
/*   const businessData = props.businessData;
  const businessList = businessData.map((business) => {
    <Business key={businessData.name} />
  }); */

  return (
/*     <ul>
      {businessList}
    </ul> */
    <div className='business__list'>
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
      <Business />
    </div>
  )
}

export default BusinessList;