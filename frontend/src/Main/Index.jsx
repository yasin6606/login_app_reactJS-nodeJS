import React, { Component } from 'react';
import Header from './Content/Components/Header/Header';
import Content from './Content/Content';

class Index extends Component {
    render = () => {
        return (
            <>
                <div className="container col-12">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col p-0">
                                    <Header />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Content />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default Index;