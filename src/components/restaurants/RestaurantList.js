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

    editRestaurantHandler(id) {
        const restaurantIndex = this.state.restaurants.findIndex(r => r.id === id);
        const restaurant = { ...this.state.restaurants[restaurantIndex] };
        restaurant.location = 'Buenos Aires';
        const restaurants = [...this.state.restaurants];
        restaurants[restaurantIndex] = restaurant;
        this.setState({
            restaurants: restaurants
        });
    }

    restaurantCard(restaurant){
        return (
            <RestaurantCard
                click={() => this.editRestaurantHandler(restaurant.id)  }
                restaurant={restaurant}
                key={restaurant.id}
            /> 
         )
    }  

    render() {
        return  (
            <div>
                { this.state.restaurants.map(restaurant => this.restaurantCard(restaurant) ) }
            </div>
        )
    }
}

export default RestaurantList;