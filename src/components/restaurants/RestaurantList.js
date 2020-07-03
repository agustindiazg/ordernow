import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';

class RestaurantList extends Component {
    list = null;
    state = {
        restaurants : [
            {
                id : "qwert23",
                name: 'Tierra de Azafranes',
                phone: '2494948328',
                location: 'Tandil',
                category: 'Restaurante',
            },
            {
                id : "kdfqwert23",
                name: 'Antares',
                phone: '249485742',
                location: 'Tandil',
                category: 'Cerveceria'
            },
            {
                id : "proqwert23",
                name: 'Mostaza',
                phone: '2494838213',
                location: 'Tandil',
                category: 'Comida Rapida'
            },
        ]
    }

    list = (
        <div>
            {   this.state.restaurants.map(restaurant => {
                    return <RestaurantCard restaurant={restaurant} key={restaurant.id} />
                })
            }
        </div>
    )

    render() {
    return this.list;
    }
}

export default RestaurantList;