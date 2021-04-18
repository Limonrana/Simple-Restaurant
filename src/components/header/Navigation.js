import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, NavbarToggler } from 'reactstrap';
import '../../assets/header.css';
import Logo from '../../assets/img/logo.png';
// import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';

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
                <div className="navigation-wrap bg-light start-header start-style">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-md navbar-light">
                                    <Link className="navbar-brand" to="/">
                                        <img src={Logo} alt="logo" />
                                    </Link>

                                    <NavbarToggler onClick={this.navToggle} />

                                    <Collapse isOpen={isNavOpen} navbar>
                                        <ul className="navbar-nav ml-auto py-4 py-md-0">
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active">
                                                <Link className="nav-link" to="/">
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/menu">
                                                    Menu
                                                </Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/about">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" to="/contact">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </Collapse>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Navbar dark color="dark" expand="sm">
                    <div className="container">
                        <NavbarBrand href="/">Simple Restaurant</NavbarBrand>
                        <NavbarToggler onClick={this.navToggle} />
                        <Collapse isOpen={isNavOpen} navbar style={{ flexGrow: 'unset' }}>
                            <Nav navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link active">
                                        Home
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/menu" className="nav-link">
                                        Menu
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/about" className="nav-link">
                                        About
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link to="/contact" className="nav-link">
                                        Contact
                                    </Link>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar> */}
            </div>
        );
    }
}

export default Navigation;
