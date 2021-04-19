import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav, NavLink } from 'react-bootstrap';
import Scrollchor from 'react-scrollchor';
class Header extends Component {
    render() {
        return (
            <div>
                <header id="header" className="App-header">
                    <Navbar inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <Link className="navbar-brand" to={"/hero_banner"}><img src="images/logo.png" /></Link>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem ><Scrollchor to="#about_us" className="nav-link">About Us</Scrollchor></NavItem>
                                <NavItem><Scrollchor to="#platform" className="nav-link">Platform</Scrollchor></NavItem>
                                <NavItem><Scrollchor to="#blogs" className="nav-link">Blogs</Scrollchor></NavItem>
                                <NavItem ><Scrollchor to="#contact_us" className="nav-link">Contact Us</Scrollchor></NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default Header;