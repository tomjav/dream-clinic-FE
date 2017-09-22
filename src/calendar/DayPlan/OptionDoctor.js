import React, {Component} from 'react';
import ModalComponent from "../../common/modal/ModalComponent";
import {Button} from "react-bootstrap";
import HTTP from "../../common/http";
import CONSTANT from "../../common/constants";

class OptionDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    closeModal = () => {
        this.setState({
            showModal: false
        });
    };

    openModal = () => {
        this.setState({
            showModal: true
        });
    };

    doAction = () => {
        this.setState({
            action: 'OK'
        });

        this.props.onActionClick({hourFrom: this.props.from, hourTo: this.props.to});

        setTimeout(() => this.closeModal(), 3000);

        // HTTP.post('/appointment', callback, {doctorId: 1, patientId: 5});
        // HTTP.post(`doctor/${CONSTANT.ID}/availability/hours`, callback, {from: this.props.from, to: this.props.to});

    };

    resolveContent = () => {

        if (this.state.action === 'OK') return approval;
        if (this.state.action === 'ERROR') return error;
        return modalContent;

    }

    getHourStatusAction = () => {
        switch (this.props.status) {
            case 'HOUR_OFF':
                return (<Button onClick={this.openModal} bsStyle="info">Pracuj</Button>);
            case 'FREE_TIME':
                return (<Button onClick={this.openModal} bsStyle="success">Weź wolne</Button>);
            case 'APPOINTMENT':
                return (<Button onClick={this.openModal} bsStyle="danger">Odwolaj</Button>);
            default:
                return null;
        }
    };

    footerModal = (<div>
        <Button bsStyle="primary" onClick={this.doAction}>Tak</Button>
        <Button onClick={this.closeModal}>Anuluj</Button>
    </div>);

    render() {
        return (
            <td>
                {this.getHourStatusAction()}
                <ModalComponent showModal={this.state.showModal}
                                headerModal={modalHeader}
                                bodyModal={this.resolveContent()}
                                footerModal={this.footerModal}/>
            </td>
        )
    }
}

const modalContent = <div>Czy na pewno chcesz wykanac te akcje?</div>
const approval = <div><span className="glyphicon glyphicon-ok"></span> Wykonano poprawnie</div>
const error = <div><span className="glyphicon glyphicon-remove"></span> Blad poprzad przetwarzania!</div>
const modalHeader = <div>Potwierdzenie</div>


export default OptionDoctor;