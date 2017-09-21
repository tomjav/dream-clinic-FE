import React, {Component} from 'react';
import {Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";

class AppointmentProposeFrom extends Component {

    constructor(props){
        super(props);
        this.state = {
            reason: '',
            comment: '',
            symptom: ''
        }
    }

    handleChangeReason = (event) => {
        this.setState({reason: event.target.value});
    };

    handleChangeComment = (event) => {
        this.setState({comment: event.target.value});
    };
     handleChangeSymptom = (event) => {
        this.setState({symptom: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Cel wizyty
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" value={this.state.reason} onChange={this.handleChangeReason} placeholder="Cel wizyty.."/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Objawy
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" value={this.state.comment} onChange={this.handleChangeComment} placeholder="Objawy.."/>
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalText">
                    <Col componentClass={ControlLabel} sm={2}>
                        Dodatkowe uwagi
                    </Col>
                    <Col sm={10}>
                        <FormControl type="text" value={this.state.symptom} onChange={this.handleChangeSymptom} placeholder="Dodatkowe uwagi.."/>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default AppointmentProposeFrom;