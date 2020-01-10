import React, { Component } from 'react';
import { Navbar, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="dark" expand="lg">
                <div className="container">
                    <NavbarBrand href="/">The Mandalorian</NavbarBrand>
                    <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
                </div>
                </Navbar>
            </div>
        );
    }
}

export default App;