import React, { Component } from "react";
import axios from 'axios';
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";

class Menu extends Component {
    state = {
        dishes: null,
        errMessage: '',
        selectedDish: null,
        allComments: null,
        filteredComments: null,
    }


    onDishTitleSelect = dish => {
        this.setState({
            selectedDish: dish,
            filteredComments: this.state.allComments.filter(comment => comment.dishId === dish.id)
        });
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


        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {
                            this.state.dishes != null ? this.state.dishes.map(item => {
                                return (
                                    <MenuItem dish={item} key={item.id} onDishTitleSelect={() => this.onDishTitleSelect(item)} />
                                )
                            }) : null
                        }
                    </div>
                    <div className="col-6">
                        {
                            this.state.selectedDish != null ? (<DishDetail key={this.state.selectedDish.id} dish={this.state.selectedDish} comments={this.state.filteredComments} />) : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;