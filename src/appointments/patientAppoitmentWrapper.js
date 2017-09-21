import React, {Component} from 'react';
import {MenuItem, Nav, NavDropdown, NavItem, Panel} from "react-bootstrap";
import AppointmentList from "./appointmentList";
import HTTP from "../common/http";

class PatientAppointmentWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: "1",
            data: []
        }
    }

    componentDidMount(){
        this.getAppointmentData(this.state.active);
    }

    getAppointmentData(active){
        let patientId = Number(localStorage.getItem('id'));
        HTTP.get(`/appointment/patient/${patientId}`, e => this.setState({data: e}), {scope: active});
    }

    handleSelect = (eventKey) => {
        this.setState({active: eventKey});
        this.getAppointmentData(eventKey);
    }

    render() {
        return (
            <Panel header={'Moje wizyty'}>
                <Nav bsStyle="tabs" justified activeKey={this.state.active} onSelect={this.handleSelect}>
                    <NavItem eventKey="1">Oczekujace</NavItem>
                    <NavItem eventKey="2">Zakonczone</NavItem>
                    <NavItem eventKey="3">Wszystkie</NavItem>
                </Nav>
                <AppointmentList data={this.state.data}/>
            </Panel>
        );
    }
}

export default PatientAppointmentWrapper;