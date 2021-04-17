import React from 'react';
import DISHES from '../../data/dishes';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = {
        dishes: DISHES,
    };

    render() {
        const { dishes } = this.state;
        const menu = dishes.map((item) => <MenuItem dish={item} key={item.id} />);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">{menu}</div>
                </div>
            </div>
        );
    }
}

export default Menu;
