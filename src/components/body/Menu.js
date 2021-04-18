import React from 'react';
import { Button, CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';
import COMMENTS from '../../data/comments';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetail';
import MenuItem from './MenuItem';

class Menu extends React.Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
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
        document.title = 'Menu - Restaurant App';
        const { dishes, selectedDish, modalOpen, comments } = this.state;
        const menu = dishes.map((item) => (
            <MenuItem dish={item} key={item.id} dishSelect={() => this.onDishSelect(item)} />
        ));

        let dishDetail = null;
        if (selectedDish !== null) {
            const getComments = comments.filter((comment) => comment.dishId === selectedDish.id);
            dishDetail = <DishDetail dish={selectedDish} comments={getComments} />;
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
