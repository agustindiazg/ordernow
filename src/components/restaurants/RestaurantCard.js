import React from 'react';

const RestaurantCard = (props) => {
  return (
            <div className="md:flex bg-gray-200 rounded-lg p-6">
                {/* <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src={`https://ui-avatars.com/api/?name=${props.restaurant.name}`} alt="avatar"></img> */}
                <div className="text-center md:text-left">
                <h2 className="text-lg">{props.restaurant.name}</h2>
                <div className="text-purple-500">{props.restaurant.category}</div>
                <div className="text-gray-600">{props.restaurant.location}</div>
                <div className="text-gray-600">{props.restaurant.phone}</div>
                </div>
            </div>
  )
  
}

export default RestaurantCard;