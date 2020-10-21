import React, { Component } from 'react';
import { FormControl, Button, Form, Col, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

class Register extends Component {

    state = {
        firstName: {
            value: undefined,
            valid: undefined,
        },
        lastName: {
            value: undefined,
            valid: undefined,
        },
        username: {
            value: undefined,
            valid: undefined,
        },
        password: {
            value: undefined,
            valid: undefined,
        },
        regLoading: false,
    };

    // firstName handler
    firstNameHandler = e => {
        const value = e.target.value;
        value.length > 1 ?
            this.setState({ firstName: { value, valid: true } })
            :
            this.setState({ firstName: { value: undefined, valid: false } });
    };

    // lastName handler
    lastNameHandler = e => {
        const value = e.target.value;
        value.length > 1 ?
            this.setState({ lastName: { value, valid: true } })
            :
            this.setState({ lastName: { value: undefined, valid: false } });
    };

    // username handler
    usernameHandler = async e => {
        const value = e.target.value;
        try {
            // connect to server and check incoming username to be unique
            const usernameCheck = await axios.post("http://localhost:5004/users/username/check", { username: value });

            usernameCheck.data.valid === true && this.setState({ username: value, valid: true });
        } catch (err) {
            this.setState({ username: { value: undefined, valid: false } });
        };
    };

    // password handler
    passwordHandler = e => {
        const value = e.target.value;

        value.length > 7 ?
            this.setState({ password: { value, valid: true } })
            :
            this.setState({ password: { value: undefined, valid: false } });
    };

    // send dispatch to show alert
    showAlertHandler = (mode, icon, text) => {
        this.props.dispatch({ type: 'SHOWALERT', mode, icon, text });
        this.setState({ regLoading: false });
    };

    // submit register form
    subRegForm = async e => {
        e.preventDefault();

        try {
            const regInfo = {
                firstName: this.state.firstName.value,
                lastName: this.state.lastName.value,
                username: this.state.username.value,
                password: this.state.password.value,
            };

            // show button loading
            this.setState({ regLoading: true });

            // if (regInfo.firstName && regInfo.lastName && regInfo.username && regInfo.password) {

                const reg = await axios.post('http://localhost:5004/api/v1/route/register/', regInfo);

                reg.data.result ?
                    this.showAlertHandler('success', 'check-circle', 'کاربر مورد نظر با موفقیت ثبت شد') :
                    this.showAlertHandler('danger', 'times-circle', 'خطا در ایجاد کاربر بوجود آمده');
            // } else
                // this.showAlertHandler('warning', 'sticky-note', 'لطفاً همه موارد را پر کنید')
        } catch (err) {
            this.showAlertHandler('warning', 'server', 'لطفاً ارتباط با سرور را بررسی کنید')
        };
    };

    render = () => {
        return (
            <>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col border">
                            <div className="row">
                                <div className="col">
                                    <NavLink
                                        to="/login"
                                        className="col-1 btn border border-top-0 rounded-0 bg-info text-white"
                                    >
                                        <span className="pl-1">ورود</span>
                                        <span className="pr-2">
                                            <FaArrowLeft />
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                            <Form onSubmit={this.subRegForm} className="rounded py-3 px-5">
                                <Form.Row className="py-2">
                                    <Form.Group as={Col} id="firstNameId" className="text-right">
                                        <Form.Label className="text-right py-1 font-weight-bold">نام</Form.Label>
                                        <FormControl
                                            type="text"
                                            id="firstNameId"
                                            className="col-6"
                                            isInvalid={this.state.firstName.valid === false}
                                            isValid={this.state.firstName.valid === true}
                                            onChange={this.firstNameHandler}
                                        />
                                        <FormControl.Feedback type="invalid">حداقل <b>دو</b> حرف وارد کنید</FormControl.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="py-2">
                                    <Form.Group as={Col} id="lastNameId" className="text-right">
                                        <Form.Label className="text-right py-1 font-weight-bold">نام خانوادگی</Form.Label>
                                        <FormControl
                                            type="text"
                                            id="lastNameId"
                                            className="col-6"
                                            isInvalid={this.state.lastName.valid === false}
                                            isValid={this.state.lastName.valid === true}
                                            onChange={this.lastNameHandler}
                                        />
                                        <FormControl.Feedback type="invalid">حداقل <b>دو</b> وارد کنید</FormControl.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="py-2">
                                    <Form.Group as={Col} id="usernameId" className="text-right">
                                        <Form.Label className="text-right py-1 font-weight-bold">نام کاربری</Form.Label>
                                        <FormControl
                                            type="text"
                                            id="usernameId"
                                            className="col-6"
                                            isInvalid={this.state.username.valid === false}
                                            isValid={this.state.username.valid === true}
                                            onChange={this.usernameHandler}
                                        />
                                    </Form.Group>
                                    <FormControl.Feedback type="invalid">نام کاربری وارد شده قبلاً استفاده شده است</FormControl.Feedback>
                                </Form.Row>
                                <Form.Row className="py-2">
                                    <Form.Group as={Col} id="passwordId" className="text-right">
                                        <Form.Label className="text-right py-1 font-weight-bold">رمز عبور</Form.Label>
                                        <FormControl
                                            type="text"
                                            id="passwordId"
                                            className="col-6"
                                            isInvalid={this.state.password.valid === false}
                                            isValid={this.state.password.valid === true}
                                            onChange={this.passwordHandler}
                                        />
                                        <FormControl.Feedback type="invalid">حداقل <b>هشت</b> کارکتر وارد کنید</FormControl.Feedback>
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row className="pt-5 pb-2">
                                    <div className="col d-flex justify-content-start">
                                        {
                                            this.state.regLoading ?
                                                <Spinner
                                                    animation="grow"
                                                    variant="info"
                                                />
                                                :
                                                <Button
                                                    type="submit"
                                                    className="col-6"
                                                    variant="success"
                                                >ثبت نام</Button>
                                        }
                                    </div>
                                </Form.Row>
                            </Form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect()(Register);