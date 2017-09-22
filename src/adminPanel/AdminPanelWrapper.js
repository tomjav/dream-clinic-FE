import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import HTTP from "../common/http";
import AdminOptions from "./AdminOptions";
import AdminForms from "./AdminForms";
import DoctorList from "./doctorList";
import AddSpec from "./AddSpec";

class AdminPanelWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: "1",
            addDoctor: true,
            seeDoctor: false,
            addSpec: false,
            data: []
        }
    }

    onSubmit = (dto) => {
        HTTP.post("/register/doctor", this.onAppointmentApprovalCallback, dto);
    };

    onSeeDoctor = () => {

        HTTP.get("/doctor/all", e => this.setState({data: e}));

        this.setState({
            addDoctor: false,
            seeDoctor: true,
            addSpec: false,
        })
    };

    onAddDoctor = () => {
        this.setState({
            addDoctor: true,
            seeDoctor: false,
            addSpec: false,
        })
    };

    onAddSpeciality = () => {
        this.setState({
            addDoctor: false,
            seeDoctor: false,
            addSpec: true,
        })
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

    componentDidMount() {
    }

    render() {
        return (
            <Row>
                <Col md={6}>
                    <AdminOptions onSeeDoctor={this.onSeeDoctor}
                                  onAddDoctor={this.onAddDoctor} onAddSpeciality={this.onAddSpeciality}/>
                </Col>
                <Col md={6}>
                    {this.state.addDoctor &&
                    <AdminForms isDoctor={true} onSubmit={this.onSubmit}/>
                    }
                    {this.state.seeDoctor &&
                    <DoctorList data={this.state.data}/>
                    }
                    {this.state.addSpec &&
                    <AddSpec />
                    }
                </Col>
            </Row>
        );
    }
}

export default AdminPanelWrapper;