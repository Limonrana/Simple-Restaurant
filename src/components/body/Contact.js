import React, { Component } from 'react';
import { Button, Card, Col, Form, FormGroup, Input, Label } from 'reactstrap';

class About extends Component {
    state = {
        fname: '',
        lname: '',
        phone: '',
        email: '',
        isAggre: true,
        contactType: '',
        message: '',
    };

    handleInput = (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const { name } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        const { fname, lname, phone, email, isAggre, contactType, message } = this.state;
        console.log(fname, lname, phone, email, isAggre, contactType, message);
        event.preventDefault();
    };

    render() {
        document.title = 'Contact Us - Restaurant App';
        const { fname, lname, phone, email, isAggre, contactType, message } = this.state;
        return (
            <div className="container">
                <div
                    className="row row-content"
                    style={{
                        paddingLeft: '20px',
                        paddingTop: '30px',
                    }}
                >
                    <Card
                        body
                        className="col-12 col-md-7 m-auto"
                        style={{ boxShadow: '-1px 3px 13px 6px rgba(0,0,0,0.75)' }}
                    >
                        <h3 className="contact-heading">Send us your feedback</h3>
                        <div className="contact-form">
                            <Form onSubmit={(event) => this.handleSubmit(event)}>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor="fname">First Name</Label>
                                        <Input
                                            type="text"
                                            name="fname"
                                            placeholder="Your first name..."
                                            value={fname}
                                            onChange={(event) => this.handleInput(event)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="lname">Last Name</Label>
                                        <Input
                                            type="text"
                                            name="lname"
                                            placeholder="Your last name..."
                                            value={lname}
                                            onChange={(event) => this.handleInput(event)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={6}>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            type="text"
                                            name="phone"
                                            placeholder="Your phone number..."
                                            value={phone}
                                            onChange={(event) => this.handleInput(event)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Your email address..."
                                            value={email}
                                            onChange={(event) => this.handleInput(event)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={12}>
                                        <Input
                                            type="select"
                                            name="contactType"
                                            value={contactType}
                                            onChange={(event) => this.handleInput(event)}
                                        >
                                            <option>Choose...</option>
                                            <option value="phone">Phone</option>
                                            <option value="email">Email</option>
                                            <option value="other">Other</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={12}>
                                        <Label htmlFor="message">Your Message</Label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            placeholder="Your message..."
                                            rows="10"
                                            value={message}
                                            onChange={(event) => this.handleInput(event)}
                                        />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={12}>
                                        <FormGroup check>
                                            <Label check>
                                                <Input
                                                    type="checkbox"
                                                    name="isAggre"
                                                    checked={isAggre}
                                                    onChange={(event) => this.handleInput(event)}
                                                />
                                                <strong> May we contact with you?</strong>
                                            </Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col md={12} className="text-center">
                                        <Button type="submit" color="primary">
                                            Send Feedback
                                        </Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default About;
