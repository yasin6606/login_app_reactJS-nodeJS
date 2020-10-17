import React, { Component } from 'react';
import { connect } from 'react-redux';
import './../../../CSS/fontSize.css';

class Alert extends Component {

    state = {
        show: false
    };

    componentDidUpdate = preProps => {
        if (preProps.mode !== this.props.mode) {
            this.setState({ show: true });
            setTimeout(() => this.setState({ show: false }), 2000);
        };
    };

    render = () => {
        return (
            <>
                <div
                    className={
                        this.state.show ? `
                            alert alert-${this.props.mode} 
                            m-${this.props.marginNum} 
                            ${this.props.inlineFlex === true && "d-inline-flex"}
                            ${this.props.fixedBottom === true && "fixed-bottom"}
                            text-center
                            w3-animate-zoom
                            `
                            :
                            "d-none"
                    }
                >
                    <span className="px-2">
                        <i className={`fa fa-${this.props.icon} ${this.props.animation && "w3-spin"}`}></i>
                    </span>
                    <span className="px-2">
                        <p className="m-0 tinyFontSize d-inline-block">
                            {this.props.text}
                        </p>
                    </span>
                </div>
            </>
        );
    };
};
const mapStateToProps = state => {
    return {
        mode: state.mode,
        icon: state.icon,
        text: state.text,
    };
};
export default connect(mapStateToProps)(Alert);