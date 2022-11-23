import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = props => {
    return (
        <div>
            <Card className="dishDetailCard">
                <CardImg top src={'http://localhost:3001/' + props.dish.image} alt={props.dish.name} />
                <CardBody className="dishDetailCardBody">
                    <CardTitle >
                        {props.dish.name}
                    </CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price}/-</CardText>

                </CardBody>
            </Card>
        </div >
    )
}
export default DishDetail;
