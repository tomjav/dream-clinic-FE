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
                  {this.props.data.map((doc, i) => <ProposeAppointmentRow {...doc} key={i} onProposeClickHandle={this.props.onProposeClickHandle}/>)}
                </tbody>
            </table>
        );
    }
}


class ProposeAppointmentRow extends Component {

    handleClick = () => {
        this.props.onProposeClickHandle(this.props)
    }


    render() {
        const d = new Date(this.props.date);

        let newDate = new Date(d + 1 * 24*60*60*1000);

        return (<tr onClick={this.handleClick}>
            <th>{this.props.doctorDto.name}</th>
            <th>{this.props.doctorDto.surname}</th>
            <th>{this.props.from}</th>
            <th>{this.props.to}</th>
            <th>{this.props.date}</th>
        </tr>)
    }
}

export default ProposeAppointmentTable;