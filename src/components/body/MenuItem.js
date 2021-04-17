import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ dish, dishSelect }) => {
    const { name, image } = dish;
    return (
        <div>
            <Card style={{ margin: '10px' }} onClick={dishSelect}>
                <CardBody style={{ padding: '.50rem' }}>
                    <CardImg width="100%" height="200px" alt={name} src={image} />
                    <CardImgOverlay
                        style={{ backgroundColor: 'black', opacity: '0.5', paddingTop: '13%' }}
                    >
                        <CardTitle style={{ color: 'white', fontSize: '50px', cursor: 'pointer' }}>
                            {name}
                        </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;
