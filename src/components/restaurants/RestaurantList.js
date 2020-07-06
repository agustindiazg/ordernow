import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';
import RestaurantForm from './RestaurantForm';
import Btn from './../utils/Btn'
class RestaurantList extends Component {
    showList = true;
    list = null;
    state = {
        showForm : false,
        restaurants : [
            {
                id : this.randomID(),
                name: 'Tierra de Azafranes',
                phone: '2494948328',
                location: 'Tandil',
                category: 'Restaurante',
                isOpen: false
            },
            {
                id : this.randomID(),
                name: 'Antares',
                phone: '249485742',
                location: 'Tandil',
                category: 'Cerveceria',
                isOpen: true
            },
            {
                id : this.randomID(),
                name: 'Mostaza',
                phone: '2494838213',
                location: 'Tandil',
                category: 'Comida Rapida',
                isOpen: true
            },
        ]
    }

    randomID() {
        return  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    getRestaurantsCopy() {
        return [...this.state.restaurants];
    }

    setRestaurants(restaurants) {
        this.setState({
            restaurants: restaurants
        });
    }

    editRestaurantHandler(id) {
        const restaurantIndex = this.state.restaurants.findIndex(r => r.id === id);
        const restaurant = { ...this.state.restaurants[restaurantIndex] };
        restaurant.location = 'Buenos Aires';
        const restaurants = this.getRestaurantsCopy();
        restaurants[restaurantIndex] = restaurant;
        this.setRestaurants(restaurants);
    }

    addRestaurantHandler = (newRestaurant) => {
        let restaurants = [...this.state.restaurants];
        restaurants.push(newRestaurant);
        this.setRestaurants(restaurants);
        this.toggleFormHandler();
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
    
    restaurantList() {
        if (!this.showList) return null;
        return this.state.restaurants.map(restaurant => this.restaurantCard(restaurant));
    }

    addRestaurantBtn() {
        return (
            <div className="flex bg-gray-200 p-6 items-center">
                <Btn action="Nuevo Restaurant" click={() => this.toggleFormHandler()}></Btn>
            </div>
        )
    }

    toggleFormHandler() {
        console.log('toggleFormHandler',this.state.showForm)
        this.setState((prevSate, props) =>{
            return {
                showForm: !prevSate.showForm
            }
        }); 
    }

    restaurantForm() {
        if (!this.state.showForm) return null;
        else return ( <RestaurantForm newRestaurant={this.addRestaurantHandler}/> )
    }

    render() {
        console.log('RestaurantList');
        return (
            <div>
                {this.addRestaurantBtn()}
                {this.restaurantForm()}
                { this.restaurantList() }
            </div>
        )
    }
}

export default React.memo(RestaurantList);