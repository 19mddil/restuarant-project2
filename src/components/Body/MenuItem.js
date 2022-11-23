import React from "react";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const MenuItem = props => {
    return (
        <div>
            <Card className="Card">
                <CardBody>
                    <CardImg className="CardImg"
                        width='100%'
                        src={'http://localhost:3001/' + props.dish.image}
                    />
                    <CardImgOverlay>
                        <CardTitle>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>

        </div>
    )
}
export default MenuItem;