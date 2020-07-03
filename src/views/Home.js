import React, { Component } from 'react';
import RestaurantList from './../components/restaurants/RestaurantList';
import Btn from './../components/utils/Btn'
class Home extends Component {

    render() {
        return (
                <div>
                    {/* <Btn action="Agregar"></Btn> */}
                    <RestaurantList></RestaurantList>
                </div>
        ) 
    }
}

export default Home;