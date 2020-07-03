import React from 'react';

const RestaurantCard = (props) => {
  return (
        <div className="md:flex bg-gray-200 p-6" onClick={props.click} >
            <div className="text-left">
            <h2 className="text-lg">{props.restaurant.name}</h2>
            <div className="text-purple-500">{props.restaurant.category}</div>
            <div className="text-gray-600">{props.restaurant.location}</div>
            <div className="text-gray-600">{props.restaurant.phone}</div>
            </div>
        </div>
  )
  
}

export default RestaurantCard;