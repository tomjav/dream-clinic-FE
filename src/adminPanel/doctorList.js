import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class DoctorList extends Component {

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
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Specialnosc</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                 {this.props.data.map((app, i) => <DoctorListRow {...app} key={i}/>)}
                </tbody>
            </table>
        );
    }
}

const DoctorListRow = (props) => {

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.surname}</td>
            <td>{props.speciality}</td>
            <td>{props.email}</td>
            <td><Button>Usun</Button></td>
        </tr>
    )
}

export default DoctorList;