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



    onAppointmentApproval = () => {

        this.setState({showModal: true});
    };

    modalClose = () => {
        this.setState({showModal: false});
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


    createAppointment = (reasons) => {

        let request = reasons;

        request.patientId = Number(localStorage.getItem('id'));
        request.doctorId = this.state.propose.doctorDto.id;
        request.date = this.state.propose.date;
        request.hourFrom = this.state.propose.from;
        request.hourTo = this.state.propose.to;
        request.hourTo = this.state.propose.to;
        request.id = this.state.propose.availabilityId;

        HTTP.post('/appointment', this.onAppointmentApprovalCallback, request);

    };

    onAppointmentApprovalCallback = () => {
        this.props.history.push(
            {
                pathname: `/approval`,
                state: {
                    header: 'Zarejestrowano wizyte!',
                    content: 'Twoja wizyta zostaja pomyslnie zarejestrowana',
                    buttonInfo: 'Przejdz do wizyt',
                    callbackPath: '/appointment'
                }
            }
        );
    };

    resolveContent = () => {
        return <AppointmentProposeFrom createAppointment={this.createAppointment}/>;

    };

    // modalFooter = <Button onClick={this.createAppointment}>Umow wizyte</Button>

    render() {
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
                                callbackClose={this.modalClose}
                />
            </Row>
        );
    }
}

export default ProposeAppointmentWrapper;


const modalHeader = <div>Umawianie wizyty</div>
const modalContent = <div>inputy</div>