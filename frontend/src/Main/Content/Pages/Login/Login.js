import React, { Component } from 'react';
import { FormControl, Button, Spinner } from 'react-bootstrap';
import { LockOutlined, SmsFailed, Notes } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {

    state = {
        username: undefined,
        password: undefined,
        emptyField: false,
        loginFailed: false,
        loginLoading: false,
    };

    // username handler
    usernameHandler = e => {
        const value = e.target.value;

        value.length > 0 ?
            this.setState({ username: value })
            :
            this.setState({ emptyField: true });
    };

    // password handler
    passwordHandler = e => {
        const value = e.target.value;

        value.length > 0 ?
            this.setState({ password: value })
            :
            this.setState({ emptyField: true });
    };

    // login handler
    loginHandler = async e => {
        try {
            // start login loading
            this.setState({ loginLoading: true });

            const login = {
                username: this.state.username,
                password: this.state.password,
            };

            if (login.username && login.password) {
                const login = await axios.post("http://localhost:5004/api/v1/route/login", login);

                // login success
                if (login.data && login.data.token) {
                    localStorage.setItem("login", login.data.token);
                    window.location("/dashboard");
                    this.setState({ loginFailed: false, emptyField: false, loginLoading: false });
                }
            } else
                this.setState({ emptyField: true, loginLoading: false });
        } catch (err) {
            this.setState({ loginFailed: true, loginLoading: false });
        };
    };

    render = () => {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col col-12 d-flex justify-content-center py-3">
                                    <LockOutlined className="rounded-circle p-1 bg-danger text-white" fontSize="large" />
                                </div>
                                <div className="col col-12 d-flex justify-content-center py-3">
                                    <h5>ورود</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="row py-3 d-flex justify-content-center">
                                        <div className="col col-md-5 col-lg-4">
                                            <FormControl
                                                type="text"
                                                placeholder="نام کاربری"
                                                onChange={this.usernameHandler}
                                            />
                                        </div>
                                    </div>
                                    <div className="row py-3 d-flex justify-content-center">
                                        <div className="col col-md-5 col-lg-4">
                                            <FormControl
                                                type="password"
                                                placeholder="رمز عبور"
                                                onChange={this.passwordHandler}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-4 pb-1">
                                <div className="col d-flex justify-content-center">
                                    {
                                        this.state.loginLoading ?
                                            <Spinner animation="grow" variant="danger" />
                                            :
                                            <Button className="col-md-4" variant="info" onClick={this.loginHandler}>ورود</Button>
                                    }
                                </div>
                            </div>
                            <div className="row py-3 d-flex justify-content-center">
                                <div className="col col-md-5 col-lg-4">
                                    <div className="row">
                                        <div className="col text-right">
                                            <NavLink to="/register" className="text-decoration-none text-right">ثبت نام</NavLink>
                                        </div>
                                        <div className="col">
                                            <NavLink to="/forgot/password" className="text-decoration-none">فراموشی رمز عبور</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={!this.state.loginFailed ? "row py-3 d-flex justify-content-center" : "d-none"}>
                                <div className="col col-4">
                                    <div className={
                                        `
                                        alert
                                         d-flex 
                                         ${this.state.loginFailed && 'alert-danger'} 
                                        ${this.state.emptyField && 'alert-warning'}
                                        `
                                    }>
                                        <span className="px-1">
                                            {
                                                (this.state.emptyField && <Notes />) ||
                                                (this.state.loginFailed && <SmsFailed />)
                                            }
                                        </span>
                                        <span className="px-1">
                                            {
                                                (this.state.emptyField && 'لطفاً همه موارد را پر کنید') ||
                                                (this.state.loginFailed && 'نام کاربری یا رمز عبور اشتباه است')
                                            }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Login;