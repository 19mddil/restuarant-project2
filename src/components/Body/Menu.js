import React, { Component } from "react";
import axios from 'axios';
import MenuItem from "./MenuItem";

class Menu extends Component {
    state = {
        dishes: [],
        errMessage: '',
    }

    componentDidMount() {
        axios.get('http://localhost:3001/dishes')
            .then(res => res.data)
            .then(data => this.setState({
                dishes: data,
            }))
            .catch(err => this.setState({ errMessage: err.message }));
    }

    componentDidUpdate() {
        //console.log(this.state.dishes);
    }

    render() {

        const menu = this.state.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} />
            )
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        {menu}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;