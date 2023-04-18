import React from 'react';
import "./App.css";

import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';

const businesses = [
  {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Thali',
  address: '32 Downtown Way',
  city: 'IndianTown',
  state: 'DC',
  zipCode: '32689',
  category: 'Indian',
  rating: 4.7,
  reviewCount: 110
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Grecos',
  address: '123 Foo Abbey',
  city: 'Bridgetown',
  state: 'DR',
  zipCode: '34235',
  category: 'Greek',
  rating: 4.2,
  reviewCount: 43
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Thali',
  address: '32 Downtown Way',
  city: 'IndianTown',
  state: 'DC',
  zipCode: '32689',
  category: 'Indian',
  rating: 4.7,
  reviewCount: 110
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Thali',
  address: '32 Downtown Way',
  city: 'IndianTown',
  state: 'DC',
  zipCode: '32689',
  category: 'Indian',
  rating: 4.7,
  reviewCount: 110
},
{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Thali',
  address: '32 Downtown Way',
  city: 'IndianTown',
  state: 'DC',
  zipCode: '32689',
  category: 'Indian',
  rating: 4.7,
  reviewCount: 110
},{
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Thali',
  address: '32 Downtown Way',
  city: 'IndianTown',
  state: 'DC',
  zipCode: '32689',
  category: 'Indian',
  rating: 4.7,
  reviewCount: 110
}
];

const App = () => {
  return (
    <div className='app'>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businesses={businesses}/>
    </div>
  );
};

export default App;
