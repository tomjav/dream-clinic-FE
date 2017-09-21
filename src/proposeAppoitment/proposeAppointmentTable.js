import React, {Component} from 'react';
import {moment} from "moment";


class ProposeAppointmentTable extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
            console.log(this.props);
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Imie</th>
                    <th>Nazwisko</th>
                    <th>Godz. od</th>
                    <th>Godz. do</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                  {this.props.data.map((doc, i) => <ProposeAppointmentRow {...doc} key={i}/>)}
                </tbody>
            </table>
        );
    }
}


class ProposeAppointmentRow extends Component {
    render() {
        return (<tr>
            <th>{this.props.doctorDto.name}</th>
            <th>{this.props.doctorDto.surname}</th>
            <th>{this.props.from}</th>
            <th>{this.props.to}</th>
            <th>{this.props.date}</th>
        </tr>)
    }
}


export default ProposeAppointmentTable;