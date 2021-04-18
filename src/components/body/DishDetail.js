import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import LoadComments from './LoadComments';

const DishDetail = ({ dish }) => {
    const { name, image, description, price, comments } = dish;
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardImg top height="360px" src={image} alt={name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle style={{ fontSize: '26px' }}>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <p>
                        <b>{price} TK</b>
                    </p>
                    <hr />
                    <h4>Comments:</h4>
                    <hr />
                    <LoadComments comments={comments} />
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;
