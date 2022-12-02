import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <Card className="Card">
            <CardBody>
                <CardImg className="CardImg"
                    width="100%"
                    src={'http://localhost:3001/' + props.dish.image}
                />
                <CardImgOverlay>
                    <CardTitle className="CardTitle" onClick={props.onDishTitleSelect}>
                        {props.dish.name}
                    </CardTitle>
                </CardImgOverlay>
            </CardBody>
        </Card>
    )
}
export default MenuItem;