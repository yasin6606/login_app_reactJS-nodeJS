import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserInfoTbl from './Pages/UserInfoTbl/UserInfotbl';

class Content extends Component {
    render = () => {
        return (
            <>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    {
                        localStorage.getItem('login') && <Route path="/dashboard" component={Dashboard} />
                    }
                    {
                        localStorage.getItem('login') && <Route path="/user/information/:id" component={UserInfoTbl} />
                    }
                    <Redirect to="/login" />
                </Switch>
            </>
        );
    }
}

export default Content;