import React, {Component} from "react";
import Link from "./Link";
import {
  Collapse,
  NavbarToggler,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


export class Navbar extends Component {
    
  state = {
    isOpen: false,
    dropdownOpen: false,
    dropDownValue:''
  };

  

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  toggledropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  renderLinks() {
    return [
      <li key={1}>
        <Link activeClassName="nav-item active" href="/">
          <a className="nav-link">Home</a>
        </Link>
      </li>,
      <li key={2}>
        <Link activeClassName="nav-item active" href="/about">
          <a className="nav-link">About</a>
        </Link>
      </li>,
      <li key={3}>
        <Link activeClassName="nav-item active" href="/contact">
          <a className="nav-link">Contact Us</a>
        </Link>
      </li>
    ];
  }

  changeValuelan = (e) => {
    localStorage.setItem('dropDownValue', e.currentTarget.textContent);
    const valuelan = localStorage.getItem('dropDownValue');
    
    this.setState({dropDownValue: valuelan})
  }

  componentDidMount(){
    const valuelan = localStorage.getItem('dropDownValue');
    this.setState({dropDownValue: valuelan !== null ? valuelan:'เปลียนภาษา'})
  }

  render() {
       
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark mb-4">
        <div className="container">
        
          <Link href="/">
            <a className="navbar-brand">Learn Next.js</a>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav ml-auto">{this.renderLinks()}</ul>

            <Dropdown style={{padding:"8px 0px"}}
              isOpen={this.state.dropdownOpen}
              toggle={this.toggledropdown}
            >
              <DropdownToggle caret>{this.state.dropDownValue}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem><div onClick={this.changeValuelan} key={4}>English</div></DropdownItem>
                <DropdownItem><div onClick={this.changeValuelan} key={5}>Thai</div></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Collapse>
        </div>
        <style>{`
                      .active {
                        color: #ed0000 !important;
                    }
                `}</style>
      </nav>
    );
  }
}

export default Navbar;
