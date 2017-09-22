import React, {Component} from 'react';
import {Nav, NavItem, Panel} from "react-bootstrap";
import HTTP from "../common/http";

class AdminOptions extends Component {

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
                <Panel header={'Akcja admina:'}>
                    <Nav bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
                        <NavItem eventKey={1} href="/home">Dodaj lekarza</NavItem>
                        <NavItem eventKey={2} title="Item">Przegladaj lekarzy</NavItem>
                        <NavItem eventKey={3} disabled>Dodaj specjalnosc</NavItem>
                    </Nav>
                </Panel>
        );
    }
}

export default AdminOptions;