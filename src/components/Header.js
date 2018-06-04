import React, { Component } from 'react';

class Header extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }
    
    render() {
        console.log('Header')
        return < h1 className = "f1" > Robo < span className = "color2" > Friends</span ></h1 >
    }
}


export default Header;