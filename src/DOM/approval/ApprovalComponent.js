import React, {Component} from 'react';
import {Button, Jumbotron} from "react-bootstrap";

class ApprovalComponent extends Component {

    handleClick = () => {
        let path = this.props.location.state.callbackPath;
        this.props.history.push(
            {
                pathname: path,
            }
        );
    };

    render()
    {
        return (
            <div>
                <Jumbotron>
                    <h1>{this.props.location.state.header}</h1>
                    <img src="https://www.tandemcal.com/img/approve-200px.png"/>
                    <p>{this.props.location.state.content}</p>
                    <p><Button onClick={this.handleClick} bsStyle="primary">{this.props.location.state.buttonInfo}</Button></p>
                </Jumbotron>
            </div>
        );
    }
};

export default ApprovalComponent;