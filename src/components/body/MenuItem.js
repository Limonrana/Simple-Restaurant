import { Card, CardBody, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const MenuItem = ({ dish }) => {
    const { name, image } = dish;
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardBody>
                    <CardImg width="100%" alt={name} src={image} style={{ opacity: '0.5' }} />
                    <CardImgOverlay>
                        <CardTitle>{name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
};

export default MenuItem;
