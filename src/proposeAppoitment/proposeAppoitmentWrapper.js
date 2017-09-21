import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";


class ProposeAppointmentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        console.log(this.state.clickedDays);
        return (
            <Row>
                <Col md={6}><LeftSide/></Col>
                <Col md={6}><RightSide/></Col>
            </Row>
        );
    }
}

export default ProposeAppointmentWrapper;