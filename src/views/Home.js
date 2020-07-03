import React, { Component } from 'react';
import RestaurantList from './../components/restaurants/RestaurantList';
class Home extends Component {

    render() {
        return (
                <div>
                    <RestaurantList></RestaurantList>
                </div>
        ) 
    }
}

export default Home;