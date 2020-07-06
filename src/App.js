import React, { Component } from 'react';
import './assets/main.css'
import Home from './views/Home';

class App extends Component {
    
    constructor(props) {
        super(props);
        console.log('App constructor');
    }

    componentDidMount() {
        console.log({AppMounted: true})
    }

    render() {
        console.log('app rendering');
        return ( <Home/> ) 
    }
}

export default App;
