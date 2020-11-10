import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class UserInfoTbl extends Component {

    state = {
        info: undefined,
    };

    getInitUserData = async () => {
        try {
            const user = await axios.get(`http://localhopst:3000/api/v1/route/users/info/${this.props.match.params.id}`);

            user && this.setState({ info: user.data.userInfo });
        } catch (error) {
            console.log(error);
        };
    };

    componentDidMount = () => {
        // get data from server
        this.getInitUserData();
    };

    render = () => {
        return (
            <>
                <div className="container">
                    <div className="row my-4 font-weight-bold">
                        <div className="col">
                            <div>
                                <NavLink to="/dashboard" className="text-decoration-none">داشبورد</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5 border py-5 px-4 text-right">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <p>نام کاربری : </p>
                                </div>
                                <div className="col">
                                    <p>
                                        {
                                            this.state.info && this.state.info.username
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>نام : </p>
                                </div>
                                <div className="col">
                                    <p>
                                        {
                                            this.state.info && this.state.info.firstName
                                        }
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>نام خانوادگی : </p>
                                </div>
                                <div className="col">
                                    <p>
                                        {
                                            this.state.info && this.state.info.lastName
                                        }
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default UserInfoTbl;