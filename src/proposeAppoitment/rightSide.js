import React, {Component} from 'react';
import {Panel} from "react-bootstrap";
import DoctorPersonalInfo from "./doctorPersonalInfo";
import AppointmentOption from "./appointmentOption";


class RightSide extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        console.log(this.state.clickedDays);
        return (
            <div>
                <DoctorPersonalInfo doctorInfo={this.props.doctorInfo}/>
                <AppointmentOption propose={this.props.propose} onAppointmentApproval={this.props.onAppointmentApproval}/>
            </div>
        );
    }
}

export default RightSide;