import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";


class ProposeAppointmentWrapper extends Component {

    doctorInfo = {
        "id": 2,
        "name": "Tomasz",
        "surname": "Grzybowski",
        "specialityId": 1,
        "speciality": "Kardiologia",
        "img": null,
        "title": 'Dr.',
        "description": 'Szanowany lekarz ktory wyleczy was ze wszystkiego!'
    };

    constructor(props) {
        super(props);
        this.state = {propose: {}};
    }

    onAppointmentApproval = () => {
        this.props.history.push(
            {
                pathname: `/approval`,
                state: {
                    header: 'Zarejestrowano wizyte!',
                    content: 'Twoja wizyta zostaja pomyslnie zarejestrowana',
                    buttonInfo: 'Przejdz do wizyt',
                    callbackPath: '/appointments'
                }
            }
        );
        // this.context.history.push(
        //     {
        //         pathname: '/approval',
        //         state: {
        //             header: 'Zarejestrowano wizyte!',
        //             content: 'Twoja wizyta zostaja pomyslnie zarejestrowana',
        //             buttonInfo: 'Przejdz do wizyt',
        //             callback: () => {
        //                 this.props.history.push({pathname: '/appointments'});
        //             }
        //         }
        //     }
        // );
    };
    onProposeClickHandle = (propose) => {

        this.setState({propose: propose});
    }

    render() {
        console.log(this.state.clickedDays);
        return (
            <Row>
                <Col md={6}><LeftSide specialityId={this.props.location.state.specialityId} onProposeClickHandle={this.onProposeClickHandle}/></Col>
                <Col md={6}><RightSide doctorInfo={this.doctorInfo} propose={this.state.propose} onAppointmentApproval={this.onAppointmentApproval}/></Col>
            </Row>
        );
    }
}

export default ProposeAppointmentWrapper;