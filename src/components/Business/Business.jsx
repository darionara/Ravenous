import React from 'react';
import './Business.css';

const businessData = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};


const Business = () => {
  return (
    <div className='business'>
      <div className='image-container'>
        <img src={businessData.imageSrc} alt={businessData.name} />
      </div>
      <h2>{businessData.name}</h2>
      <div className='business__info'> 
        <div className='business__address'>
          <p>{businessData.address}</p>
          <p>{businessData.city}</p>
          <p>{`${businessData.state} ${businessData.zipCode}`}</p>
        </div>
        <div className='business__reviews'>
          <h3>{businessData.category.toUpperCase()}</h3>
          <h3>{`${businessData.rating} stars`}</h3>
          <p>{`${businessData.reviewCount} reviews`}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Business;