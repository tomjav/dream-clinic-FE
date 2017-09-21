import React, {Component} from 'react';
import ModalComponent from "../../common/modal/ModalComponent";
import {Button} from "react-bootstrap";
import HTTP from "../../common/http";
import CONSTANT from "../../common/constants";
import LoginFormComponent from "./LoginForm";

class LoggedAsSomeone extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    handleClick = () => {
        localStorage.clear();
        this.props.handleLoggenIn(false);
    };

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li>`Zalogowano jako {localStorage.getItem('username')}`</li>
                <li onClick={this.handleClick}><a><span className="glyphicon glyphicon-log-in"></span> Wylogoj</a></li>
            </ul>
        )
    }
}

export default LoggedAsSomeone;