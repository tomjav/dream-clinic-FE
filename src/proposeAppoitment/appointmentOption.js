import React, {Component} from 'react';
import {Button, Col, Panel} from "react-bootstrap";
import CONSTANT from "../common/constants";


class AppointmentOption extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        return (
            <Panel header='Data wizyty'>
                <Col md={7}>
                    <h3>{this.props.propose.date}</h3>
                    <h4>{this.props.propose.from}:00 - {this.props.propose.to}:00</h4>
                    <h5>{CONSTANT.ADDRESS}</h5>
                    <Button onClick={this.props.onAppointmentApproval}>Umow wizyte</Button>
                </Col>
            </Panel>
        );
    }
}

export default AppointmentOption;