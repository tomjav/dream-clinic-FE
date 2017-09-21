import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import RightSide from "./rightSide";
import LeftSide from "./leftSide";
import ModalComponent from "../common/modal/ModalComponent";
import AppointmentProposeFrom from "./appointmentProposeForm";
import HTTP from "../common/http";


class ProposeAppointmentWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            propose: {showModal: false}
        };
    }

    onAppointmentApprovalCallback = () => {
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
    };

    callbackClose = () => {
        this.setState({showModal: false});
    };

    onAppointmentApproval = () => {

        this.setState({showModal: true});
    };

    onProposeClickHandle = (propose) => {

        let callback = (e) => this.setState(
            {
                propose: propose,
                doctorInfo: e
            });

        this.getDoctorInfo(propose.doctorDto.id, callback);
    };

    getDoctorInfo(id, callback) {
        HTTP.get(`/doctor/${id}`,callback);
    }


    onSubmit = (reasons) => {

        // let request = reasons;
        //
        // request.


        console.log("submit!");
    }


    resolveContent = () => {
        return <AppointmentProposeFrom onSubmit={this.onSubmit}/>;

    };

    modalFooter = <Button onClick={this.onSubmit}>Umow wizyte</Button>

    render() {
        console.log(this.state.clickedDays);
        return (
            <Row>
                <Col md={6}><LeftSide specialityId={this.props.location.state.specialityId}
                                      onProposeClickHandle={this.onProposeClickHandle}/></Col>
                {this.state.doctorInfo &&
                <Col md={6}><RightSide doctorInfo={this.state.doctorInfo} propose={this.state.propose}
                                       onAppointmentApproval={this.onAppointmentApproval}/></Col>
                }
                <ModalComponent showModal={this.state.showModal}
                                headerModal={modalHeader}
                                bodyModal={this.resolveContent()}
                                footerModal={this.modalFooter}
                                callbackClose={this.callbackClose}
                />
            </Row>
        );
    }
}

export default ProposeAppointmentWrapper;


const modalHeader = <div>Umawianie wizyty</div>
const modalContent = <div>inputy</div>