import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class AppointmentList extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <table className="table table-hover table-striped">
                <thead className="thead-inverse">
                <tr>
                    <th>Cel wizyty</th>
                    <th>Lekarz</th>
                    <th>Specialnosc</th>
                    <th>Data</th>
                    <th>Godzina</th>
                    <th>Akcja</th>
                </tr>
                </thead>
                <tbody>
                     {this.props.data.map((app, i) => <AppointmentListRow {...app} key={i}/>)}
                </tbody>
            </table>
        );
    }
}

const AppointmentListRow = (props) => {

    return (
        <tr>
            <td>{props.reason}</td>
            <td>{props.doctorName} {props.doctorSurname}</td>
            <td>{props.speciality}</td>
            <td>{props.date}</td>
            <td>{props.hourFrom}</td>
            <td><Button>zrob cos fajnego</Button></td>
        </tr>
    )
}

export default AppointmentList;