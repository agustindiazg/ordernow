import React, { Component } from 'react';
import RestaurantList from './../components/restaurants/RestaurantList';
class Home extends Component {

    componentDidMount() {
        console.log({HomeMounted: true})
    }
    
    render() {
        console.log('home rendering');
        return (<RestaurantList />);
    }
}

export default Home;