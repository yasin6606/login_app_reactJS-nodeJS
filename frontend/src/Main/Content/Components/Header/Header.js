import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import date from 'date-and-time';

class Header extends Component {

    state = {
        time: undefined,
    }

    render = () => {

        setInterval(() => {
            this.setState({ time: date.format(new Date(), 'ss : mm : HH') });
        }, 1000)

        return (
            <>
                <div className="container col-12">
                    <div className="row">
                        <div className="col p-0">
                            <Navbar bg="dark" className="text-white">
                                <Navbar.Collapse className="py-2">
                                    <Nav>
                                        <span className="px-1">
                                            {
                                                localStorage.getItem("loginInfo") &&
                                                localStorage.getItem("loginInfo").user.firstName
                                            }
                                        </span>
                                        <span className="px-1">
                                            {
                                                localStorage.getItem("loginInfo") &&
                                                localStorage.getItem("loginInfo").user.lastName
                                            }
                                        </span>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Collapse className="py-2 d-flex justify-content-end">
                                    <Nav>
                                        {
                                            this.state.time
                                        }
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;