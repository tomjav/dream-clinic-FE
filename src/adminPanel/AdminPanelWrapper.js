import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";
import HTTP from "../common/http";
import AdminOptions from "./AdminOptions";
import AdminForms from "./AdminForms";

class AdminPanelWrapper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: "1",
            data: []
        }
    }

    componentDidMount(){
    }

    render() {
        return (
            <Row>
                <Col md={6}>
                    <AdminOptions/>
                </Col>
                <Col md={6}>
                    <AdminForms/>
                </Col>
            </Row>
        );
    }
}

export default AdminPanelWrapper;