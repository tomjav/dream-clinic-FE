import React, {Component} from 'react';
import AppoitmentFilter from "./appointmentFilter";
import ProposeAppointmentTable from "./proposeAppointmentTable";
import {Panel} from "react-bootstrap";


class LeftSide extends Component {

    data = [
        {
            "doctorDto": {
                "id": 2,
                "name": "Tomasz",
                "surname": "Grzybowski",
                "specialityId": 1,
                "speciality": "Kardiologia",
                "img": null
            },
            "date": 1503352800000,
            "form": 8,
            "to": 11
        }
    ];


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        console.log(this.state.clickedDays);
        return (
            <Panel>
                <AppoitmentFilter/>
                <ProposeAppointmentTable data={this.data}/>
            </Panel>
        );
    }
}

export default LeftSide;