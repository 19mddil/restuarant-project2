import React, { Component } from "react";
import axios from 'axios';
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button, CardGroup } from 'reactstrap';


class Menu extends Component {
    state = {
        dishes: null,
        selectedDish: null,
        allComments: null,
        filteredComments: null,
        isModalOpen: false,
        errMessage: '',
    }


    onDishTitleSelect = dish => {
        this.setState({
            selectedDish: dish,
            filteredComments: this.state.allComments.filter(comment => comment.dishId === dish.id)
        });
        this.modalToggler();
    }

    modalToggler = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    }



    componentDidMount() {
        axios.get('http://localhost:3001/dishes')
            .then(res => res.data)
            .then(data => this.setState({
                dishes: data,
            }))
            .catch(err => this.setState({ errMessage: err.message }));
        axios.get('http://localhost:3001/comments')
            .then(res => res.data)
            .then(data => this.setState({
                allComments: data,
            }))
    }

    componentDidUpdate() {
        //console.log(this.state.dishes);
    }

    render() {
        document.title = 'Menu';
        const menu = this.state.dishes != null ? this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} onDishTitleSelect={() => this.onDishTitleSelect(item)} />
            )
        }) : null;

        const dishDetail = this.state.selectedDish != null ? (<DishDetail key={this.state.selectedDish.id} dish={this.state.selectedDish} comments={this.state.filteredComments} />) : null;

        return (
            <div className="container">
                <div className="row">
                    <CardGroup>
                        {menu}
                    </CardGroup>
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.modalToggler}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu;