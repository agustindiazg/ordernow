import React, { Component } from 'react';

class Navigation extends Component {
    activeTabClass = 'text-center block border rounded py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white';
    notActiveTabClass = 'text-center block rounded py-2 px-4 text-blue-500 hover:text-blue-900';
    state = {
        currentPage: {
            home: true,
            profile: false
        }
    };

    setCurrentPageHandler(clickedPage){
        console.log(clickedPage);
        debugger;
        this.state({
            currentPage : { home: false, profile: true}
        })
    }

    componentDidMount() {
        console.log({HomeMounted: true})
    }
    
    render() {
        console.log('home rendering');
        return (
                <ul className="flex mt-2 fixed bottom-0 w-full bg-white">
                    <li className="mr-6 flex-1">
                        <a onClick={() => this.setCurrentPageHandler('home')} className={ this.state.currentPage.home ? this.activeTabClass : this.notActiveTabClass} href="/home">Home</a>
                    </li>
                    <li className="mr-6 flex-1">
                        <a onClick={() => this.setCurrentPageHandler('profile')} className={ this.state.currentPage.profile ? this.activeTabClass : this.notActiveTabClass} href="/profile">Perfil</a>
                    </li>
                </ul>
        );
    }
}

export default Navigation;