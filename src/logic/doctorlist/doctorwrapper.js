import React, {Component} from 'react';
import HTTP from "../../common/http";
import DoctorList from "./doctorlist";

class DoctorWrapper extends Component {

    constructor(){
        super();
        this.state = {
            doctors : []
        }
    }

    componentDidMount(){
        HTTP.get('/doctor', e => this.setState({doctors: e}), {specialityId: this.props.location.state.specialityId},);
    }

    redirectToCalendar = (id) => {
        console.log(this);
        this.props.history.push("/availability");
    };


    render() {
        return (
            <div>
                <DoctorList redirectToCalendar={this.redirectToCalendar} doctors={this.state.doctors}/>
            </div>
        );
    }
}

export default DoctorWrapper;