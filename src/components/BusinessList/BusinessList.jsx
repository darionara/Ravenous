import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

const BusinessList = ({ businesses }) => {
  const businessList = businesses.map((business) => {
    return <Business business={business} key={business.name} />
  });

  return (
    <div className='business__list'>
      {businessList}
    </div>
  );
};

export default BusinessList;