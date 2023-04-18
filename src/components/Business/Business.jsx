import React from 'react';
import './Business.css';

const Business = ({ business }) => {

  return (
    <div className='business'>
      <div className='image-container'>
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className='business__info'> 
        <div className='business__address'>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        <div className='business__reviews'>
          <h3>{business.category.toUpperCase()}</h3>
          <h3>{`${business.rating} stars`}</h3>
          <p>{`${business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;