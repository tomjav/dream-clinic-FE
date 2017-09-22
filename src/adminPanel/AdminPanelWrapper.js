import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import HTTP from "../common/http";
import AdminOptions from "./AdminOptions";
import AdminForms from "./AdminForms";

class AdminPanelWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: "1",
            data: []
        }
    }

    onSubmit = (dto) => {
        HTTP.post("/register/doctor", this.onAppointmentApprovalCallback, dto);
    };

    onAppointmentApprovalCallback = () => {
        this.props.history.push(
            {
                pathname: `/approval`,
                state: {
                    header: 'Zarejestrowano uzytkownika!',
                    content: 'Konto uzytkownika jest juz aktywne',
                    buttonInfo: 'Przejdz do uzytkownikow',
                    callbackPath: '/appointment'
                }
            }
        );
    };

    componentDidMount(){
    }

    render() {
        return (
            <Row>
                <Col md={6}>
                    <AdminOptions/>
                </Col>
                <Col md={6}>
                    <AdminForms isDoctor={true} onSubmit={this.onSubmit}/>
                </Col>
            </Row>
        );
    }
}

export default AdminPanelWrapper;