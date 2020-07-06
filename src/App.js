import React, { Component } from 'react';
import './assets/main.css'
import Home from './views/Home';
import Navigation from './views/Navigation';

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
        return (
            <div className="h-screen">
                <Home />
                <Navigation /> 
            </div>
        ) 
    }
}

export default App;
