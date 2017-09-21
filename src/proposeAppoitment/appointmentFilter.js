import React, {Component} from 'react';
import {Button, Col, FormControl, FormGroup, Panel, Row} from "react-bootstrap";

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class AppoitmentFilter extends Component {

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
        this.state = {
            startDate: new moment(),
            endDate: undefined
        };
    }

    handleChangeStart = (date) => {
        this.setState({startDate: date});
    };

    handleChangeEnd = (date) => {
        this.setState({endDate: date});
    };


    componentDidMount() {

    }

    render() {
        console.log(this.state.clickedDays);
        return (
            <Panel header='Filtr wyszukiwania' bsStyle="info">
                <Row>
                    <Col md={6}>
                        <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart}
                                    placeholderText="Szukaj wizydy od dnia"/>
                        <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} isClearable={true}
                                    placeholderText="Szukaj wizydy do dnia"/>
                    </Col>
                    <Col md={6}>
                        <input type="text" placeholder="Od godziny"/>
                        <input type="text" placeholder="Do godziny"/>
                    </Col>
                </Row>
                <Button>Zastosuj</Button>
            </Panel>
        );
    }
}

export default AppoitmentFilter;