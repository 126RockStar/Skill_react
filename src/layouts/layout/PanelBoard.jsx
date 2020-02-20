import React, { Component } from 'react';
//import {withRouter} from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import {
    // UncontrolledTooltip,
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
  } from 'reactstrap';

const navItems = [
    { to: '/', name: 'Dashboard', exact: true },
    { to: '/chartsetting', name: 'Chartsetting', exact: false },
    { to: '/hookstutorial', name: 'HooksTutorial', exact: false },
    { to: '/combinefirebase', name: 'CombineFirebase', exact: false },
    { to: '/serverconnect', name: 'CBMtoWeb', exact: false },
    { to: '/recaptcha', name: 'Recaptcha', exact:false},
    { to: '/modal', name: 'Modal', exact:false},
];

  
class PanelBoard extends Component {
    state = {  }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() { 
        return (
            <div className="w-100 mt-5 pt-5">
                <nav class="nav d-flex flex-column ">
                    <span className="nav-link nav-profile">Allen Moreno</span>
                    <span className="nav-link nav-category">Main Menu</span>
                    
                </nav>  

                <Nav vertical>
                    {navItems.map(({ to, name, exact }, index) => (
                        <NavItem key={index} >
                            <BSNavLink                                
                                className="aaa"
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >                            
                            <span className="">{name}</span>
                            </BSNavLink>
                        </NavItem>
                    ))} 
                </Nav>  
            </div>            
        );
    }
}
 
export default PanelBoard;