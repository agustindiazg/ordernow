import React, { Component } from 'react';
import WithClass from './../../hoc/WithClass'
class RestaurantForm extends Component {

    state = {
        name: '',
        category: '',
        location: '',
        phone: ''
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // shouldComponentUpdate() {
    //     return false;
    // }

    componentDidMount() {
        console.log({RestaurantFormMounted: true})
    }
    
    newRestaurant = (e) => {
        e.preventDefault();
        const newRestaurant = {
            id: 'fsjd231ieid',
            isOpen: false,
            ...this.state
        };
        this.props.newRestaurant(newRestaurant);
    }

    render() {
        console.log('RestaurantForm rendering...');
        return (
                <WithClass classes="w-full h-screen max-w-xs">
                    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={(e) => this.newRestaurant(e)}>
                        <WithClass classes="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Nombre</label>
                            <input  onChange={this.handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="McDonald's"/>
                        </WithClass>
                        <WithClass classes="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Categoria </label>
                            <input  onChange={this.handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="category" name="category" type="text" placeholder="Comida Rapida"/>
                        </WithClass>
                        <WithClass classes="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Ubicacion </label>
                            <input  onChange={this.handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="location" name="location" type="text" placeholder="Palermo"/>
                        </WithClass>
                        <WithClass classes="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password"> Telefono </label>
                            <input  onChange={this.handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="number" placeholder="2494611482"/>
                        </WithClass>
                        <WithClass classes="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Agregar
                            </button>
                        </WithClass> 
                    </form>
                </WithClass>
        )
    }
        
    
    
  
}

export default React.memo(RestaurantForm) ;