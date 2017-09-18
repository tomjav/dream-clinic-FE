import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class DoctorList extends Component {

    render() {
        return (
            <table className="table table-hover">
                <tbody>
                {this.props.doctors.map(doc => <Doctor {...doc} key={doc.id} redirectToCalendar={this.props.redirectToDoctors}/>)}
                </tbody>
            </table>
        );
    }

}


const Doctor = (props) => {

    return (
        <tr>
            <th><img style={{width: 100, height: 100}} src={props.img} alt='img'/></th>
            <th>{props.name} </th>
            <th>{props.surname} </th>
            <th>{props.speciality}</th>
            <th><Button onClick={props.redirectToDoctors} bsStyle="primary">Zobacz kalendarz</Button></th>
            <th><Button>Opinie</Button></th>
        </tr>
    );
};

export default DoctorList;