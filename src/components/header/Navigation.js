import React, { Component } from 'react';
import { Link as NavLink } from 'react-router-dom';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

class Navigation extends Component {
    state = {
        isNavOpen: false,
    };

    navToggle = () => {
        const { isNavOpen } = this.state;
        this.setState({ isNavOpen: !isNavOpen });
    };

    render() {
        const { isNavOpen } = this.state;
        return (
            <div>
                <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarBrand href="/">Simple Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse isOpen={isNavOpen} navbar style={{ flexGrow: 'unset' }}>
                            <Nav Navbar>
                                <NavItem>
                                    <NavLink to="/" className="nav-link active">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/menu" className="nav-link">
                                        Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/about" className="nav-link">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="nav-link">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
