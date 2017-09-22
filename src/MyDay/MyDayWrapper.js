import React, {Component} from 'react';
import HTTP from "../common/http";
import ArrayUtil from "../common/ArrayUtil";
import {Col, Row} from "react-bootstrap";
import MyDay from "./MyDay";


class MyDayWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: [],
            monthId: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            hours: []
        };
    }

    componentDidMount() {
        this.getWorkingHours(this.props);
    };

    getWorkingHours = () => {
        let doctorId = Number(localStorage.getItem('id'));
        let date = new Date();
        HTTP.get(`/doctor/${doctorId}/availability/hours`, e => this.setState({hours: e}), {date: date});
    };

    render() {
        console.log(this.state.clickedDays);
        return (
            <Row>
                <Col md={6}>
                    <MyDay hours={this.state.hours}/>
                </Col>
            </Row>
        );
    }
}


export default MyDayWrapper;