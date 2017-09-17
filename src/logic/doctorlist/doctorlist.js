import React, {Component} from 'react';
import HTTP from "../../common/http";
import {Button, Col, Thumbnail} from "react-bootstrap";

class DoctorList extends Component {

    render() {
        console.log(this.props.doctors);
        return (
            <table className="table table-hover">
                <tbody>
                {this.props.doctors.map(doc => <Doctor {...doc} key={doc.id} redirectToCalendar={this.props.redirectToCalendar}/>)}
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
            <th><Button onClick={props.redirectToCalendar} bsStyle="primary">Zobacz kalendarz</Button></th>
            <th><Button>Opinie</Button></th>
        </tr>
    );
};

export default DoctorList;