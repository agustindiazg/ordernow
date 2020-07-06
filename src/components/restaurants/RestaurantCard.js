import React from 'react';

const RestaurantCard = (props) => {
    console.log('RestaurantCard rendering')
    return (
        <div className="md:flex bg-gray-200 p-6 hover:bg-gray-300" >
            <div className="text-left">
                <div className="flex justify-between">
                    <h2 className="text-lg items-center"><span className={props.restaurant.isOpen ? 'bg-green-500 p-2 rounded-full h-1 w-1 inline-flex mr-1' : 'bg-red-500 p-2 rounded-full h-1 w-1 inline-flex mr-1' }></span>{props.restaurant.name}</h2>
                        <button className="hover:bg-gray-400 py-2 px-4 rounded inline-flex items-center" onClick={props.click}>
                        <svg className="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className='text-purple-500'>{props.restaurant.category}</div>
                <div className="text-gray-600">{props.restaurant.location}</div>
                <div className="text-gray-600">{props.restaurant.phone}</div>
            </div>
        </div>
  )
  
}

export default RestaurantCard;