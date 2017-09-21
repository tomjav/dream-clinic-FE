import React, {Component} from 'react';
import AppoitmentFilter from "./appointmentFilter";
import ProposeAppointmentTable from "./proposeAppointmentTable";
import {Panel} from "react-bootstrap";
import HTTP from "../common/http";


class LeftSide extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    changeData = (data) => {
        this.setState({data: data});
    }

    handleSearchProposes = (dto) => {
        dto.specialityId = this.props.specialityId;
        HTTP.get('/speciality/availability', e => this.changeData(e),  dto);
    };


    componentDidMount() {

    }

    render() {
        return (
            <Panel>
                <AppoitmentFilter handleSearchProposes={this.handleSearchProposes}/>
                <ProposeAppointmentTable data={this.state.data}/>
            </Panel>
        );
    }
}

export default LeftSide;