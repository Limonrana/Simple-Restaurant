import React from 'react';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
    };

    onDishSelect = (dish) => {
        this.setState({ selectedDish: dish });
    };

    render() {
        const { dishes, selectedDish } = this.state;
        const menu = dishes.map((item) => (
            <MenuItem dish={item} key={item.id} dishSelect={() => this.onDishSelect(item)} />
        ));

        let dishDetail = null;
        if (selectedDish !== null) {
            dishDetail = <DishDetail dish={selectedDish} />;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6" style={{ height: '94vh', overflowY: 'auto' }}>
                        {menu}
                    </div>
                    <div className="col-6">{dishDetail}</div>
                </div>
            </div>
        );
    }
}

export default Menu;
