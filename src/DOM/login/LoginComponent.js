import React, {Component} from 'react';
import ModalComponent from "../../common/modal/ModalComponent";
import {Button} from "react-bootstrap";
import HTTP from "../../common/http";
import LoginFormComponent from "./LoginForm";

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    };

    openModal = () => {
        this.setState({
            showModal: true
        });
    };

    doAction = () => {
        this.setState({
            action: 'OK'
        });

        this.props.onActionClick({hourFrom: this.props.from, hourTo: this.props.to});


        // HTTP.post('/appointment', callback, {doctorId: 1, patientId: 5});
        // HTTP.post(`doctor/${CONSTANT.ID}/availability/hours`, callback, {from: this.props.from, to: this.props.to});

    };

    resolveContent = () => {

        if (this.state.action === 'OK') return approval;
        if (this.state.action === 'ERROR') return error;
        return <LoginFormComponent onSubmit={this.onSubmit}/>;

    };


    storeTokenAndUserData = (token) => {
        localStorage.setItem('token', token.token);
        let callback = (e) => {
            localStorage.setItem('username', e.username);
            localStorage.setItem('name', e.name);
            localStorage.setItem('surname', e.surname);
            localStorage.setItem('id', e.doctorId ? e.doctorId : e.patientId);
            this.closeModal();
            this.props.handleLoggenIn(true);
        };
        HTTP.get("/user", e => callback(e), {}, true);
    };


    /*IMPORTANT*/
    onSubmit = (dto) => {
        HTTP.post("/auth", e => this.storeTokenAndUserData(e), dto);
    };

    footerModal = (<div>
        <Button bsStyle="primary" onClick={this.doAction}>Tak</Button>
        <Button onClick={this.closeModal}>Anuluj</Button>
    </div>);

    render() {
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li onClick={this.openModal}><a><span className="glyphicon glyphicon-log-in"></span> Login</a></li>

                <ModalComponent showModal={this.state.showModal}
                                headerModal={modalHeader}
                                bodyModal={this.resolveContent()}
                                footerModal={this.footerModal}/>
            </ul>
        )
    }
}

const modalHeader = <div>Logowanie</div>

const approval = <div><span className="glyphicon glyphicon-ok"></span>Wykonano poprawnie</div>
const error = <div><span className="glyphicon glyphicon-remove"></span> Blad poprzad przetwarzania!</div>


export default LoginComponent;