import React from 'react';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false,
    };

    onDishSelect = (dish) => {
        const { modalOpen } = this.state;
        this.setState({ selectedDish: dish, modalOpen: !modalOpen });
    };

    toggleModal = () => {
        const { modalOpen } = this.state;
        this.setState({ modalOpen: !modalOpen });
    };

    render() {
        const { dishes, selectedDish, modalOpen } = this.state;
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
                    <CardColumns className="columnCount" style={{ marginTop: '20px' }}>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={modalOpen}>
                        <ModalBody>{dishDetail}</ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;
