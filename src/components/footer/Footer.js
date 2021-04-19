import React, { Component } from 'react';
import { Navbar, NavItem, Nav, NavLink } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
import { Link } from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="display_table footer_main">
                                    <div className="footer_left">
                                        <Navbar inverse collapseOnSelect>
                                            <Navbar.Header>
                                                <Navbar.Brand>
                                                    <div className="footer_logo">
                                                        <Link to={"/"}><img src="images/logo.png" /></Link><span>&copy; 2018 nestb.com</span>
                                                    </div>
                                                </Navbar.Brand>
                                                <Navbar.Toggle />
                                            </Navbar.Header>
                                            <Navbar.Collapse>
                                                <Nav pullRight>
                                                    <NavItem><Scrollchor to="#platform" className="nav-link">Platform</Scrollchor></NavItem>
                                                    <NavItem><Scrollchor to="#blogs" className="nav-link">Blogs</Scrollchor></NavItem>
                                                    <NavItem ><Scrollchor to="#about_us" className="nav-link">About Us</Scrollchor></NavItem>
                                                    <NavItem ><Scrollchor to="#contact_us" className="nav-link">Contact Us</Scrollchor></NavItem>
                                                </Nav>
                                            </Navbar.Collapse>
                                        </Navbar>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;