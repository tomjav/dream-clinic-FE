import React, {Component} from 'react';
import {Button, Col, FormControl, FormGroup, Panel, Row} from "react-bootstrap";

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class AppoitmentFilter extends Component {

     constructor(props) {
        super(props);
        this.state = {
            dateFrom: new moment(),
            dateTo: new moment(),
            from: '',
            to: ''
        };
    }

    handleChangeStart = (date) => {
        this.setState({dateFrom: date});
    };

    handleChangeEnd = (date) => {
        this.setState({dateTo: date});
    };

    handleChangeFrom = (event) => {
        console.log(event.target.value);
        this.setState({from: event.target.value});
    };

    handleChangeTo = (event) => {
        this.setState({to: event.target.value});
    };


    handleClick = () => {
        let dto = {
          dateFrom : this.state.dateFrom,
          dateTo : this.state.dateTo,
          from : this.state.from,
          to : this.state.to,
        };
        if(dto.dateFrom) dto.dateFrom = dto.dateFrom.toDate();
        if(dto.dateTo) dto.dateTo = dto.dateTo.toDate();

        if(!dto.dateTo){
            dto.dateTo = new Date(dto.dateFrom.getYear(),dto.dateFrom.getMonth()+1, 1);
        }

        if(!dto.from){
            dto.from = 8;
        }

        if(!dto.to){
            dto.to = 19;
        }

        this.props.handleSearchProposes(dto);
    }

    componentDidMount() {

    }

    render() {
        return (
            <Panel header='Filtr wyszukiwania' bsStyle="info">
                <Row>
                    <Col md={6}>
                        <DatePicker selected={this.state.dateFrom} onChange={this.handleChangeStart}
                                    placeholderText="Szukaj wizyty od dnia"/>
                        <DatePicker selected={this.state.dateTo} onChange={this.handleChangeEnd}
                                    placeholderText="Szukaj wizyty do dnia"/>
                    </Col>
                    <Col md={6}>
                        <input value={this.state.from} onChange={this.handleChangeFrom} type="text" placeholder="Od godziny"/>
                        <input value={this.state.to} onChange={this.handleChangeTo} type="text" placeholder="Do godziny"/>
                    </Col>
                </Row>
                <button onClick={this.handleClick}>Zastosuj</button>
            </Panel>
        );
    }
}

export default AppoitmentFilter;