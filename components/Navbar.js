import React, { Component } from 'react'
import Link from './Link'

export class Navbar extends Component {
   
    render() {
        
        return (
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark mb-4">
                <div className="container">
                <Link href="/"><a className="navbar-brand">Learn Next.js</a></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto">
                        <li>
                            <Link activeClassName='nav-item active' href='/'>
                                <a className='nav-link'>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName='nav-item active' href='/about'>
                                <a className='nav-link'>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link activeClassName='nav-item active' href='/contact'>
                                    <a className='nav-link'>Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
                <style jsx>{`
                .navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {
                    color: #fe0c0c;
                }
            `}</style>
            </nav>
        )
    }
}

export default Navbar