import React, { Component } from 'react';
import { BiLogOutCircle } from 'react-icons/bi';
import './../../../CSS/pointerMouse.css';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {

    // logout handler
    logoutHandler = () => {
        localStorage.removeItem('login');
        localStorage.removeItem('info');
        window.location.reload();
    };

    render = () => {
        let info = JSON.parse(localStorage.getItem('info'));

        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="alert alert-success">
                                <h1 className="text-center">خوش آمدید</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 border-bottom">
                        <div className="col text-right">
                            <span className="px-1">
                                <p className="d-inline-block">{info && info.firstName}</p>
                            </span>
                            <span className="px-1">
                                <p className="d-inline-block">{info && info.lastName}</p>
                            </span>
                        </div>
                        <div className="col">
                            <div className="py-3 col-12">
                                <BiLogOutCircle
                                    className="text-danger w3-spin pointerMouse"
                                    size="30"
                                    onClick={this.logoutHandler}
                                    title="خروج"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="col text-right">
                            <NavLink
                                to={`/user/information/${info._id}`}
                                className="text-decoration-none">
                                اطلاعات کاربر</NavLink>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Dashboard;