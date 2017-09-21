import React, {Component} from 'react';
import {Button, Col, Panel, Row} from "react-bootstrap";


class DoctorPersonalInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render() {
        console.log(this.props.doctorInfo);
        return (
            <Panel>
                <Col md={5}>
                    <img src="https://dta0yqvfnusiq.cloudfront.net/encorerealestateagents/2016/10/avatarmn-161013-57ffd40d94e8f.png" alt="foto"/>
                </Col>
                <Col md={7}>
                    <h3>{this.props.doctorInfo.title} {this.props.doctorInfo.name} {this.props.doctorInfo.surname}</h3>
                    <h4>{this.props.doctorInfo.speciality}</h4>
                    <p>{this.props.doctorInfo.description}</p>
                    <Button>Opinie</Button>
                    <Button>Kontakt</Button>
                </Col>
            </Panel>
        );
    }
}

export default DoctorPersonalInfo;