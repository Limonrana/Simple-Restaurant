import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

const DishDetail = ({ dish }) => {
    const { name, image, description, price } = dish;
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardImg top height="360px" src={image} alt={name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                    <CardText>{price} TK</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default DishDetail;
