import React, { Component } from 'react'
import Link from './Link'
import { Collapse, NavbarToggler, NavbarBrand } from "reactstrap";

export class Navbar extends Component {

    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    renderLinks() {
        return [
            <li key={1}>
                <Link activeClassName='nav-item active' href='/'>
                    <a className='nav-link'>Home</a>
                </Link>
            </li>,
            <li key={2}>
                <Link activeClassName='nav-item active' href='/about'>
                    <a className='nav-link'>About</a>
                </Link>
            </li>,
            <li key={3}>
                <Link activeClassName='nav-item active' href='/contact' >
                    <a className='nav-link'>Contact Us</a>
                </Link>
            </li>
        ];
    }

    render() {

        return (

            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link href="/"><a className="navbar-brand">Learn Next.js</a></Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <ul className="navbar-nav ml-auto">{this.renderLinks()}</ul>
                    </Collapse>
                   
                </div>
                <style>{`
                      .active {
                        color: #ed0000 !important;
                    }
                `}</style>
            </nav>
        )
    }
}

export default Navbar