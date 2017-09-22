import React, {Component} from 'react';
import HTTP from "../common/http";
import HoursTable from "../calendar/DayPlan/HoursTable";
import CONSTANT from "../common/constants";
import {Button} from "react-bootstrap";


class MyDay extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: []
        };
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <DayBar/>
                    <tr>
                        <th>Godzina</th>
                        <th>Status</th>
                        <th>Opcje</th>
                    </tr>
                    </thead>
                    <MyDayHoursTable hours={this.props.hours} onActionClick={this.onActionClick}/>
                </table>

            </div>
        );
    };
}

const DayBar = (props) => {
    return (
        <tr>
            <h2>Moj dzien - {CONSTANT.DAY[new Date().getDay() - 1]}</h2>
        </tr>
    );
};

class MyDayHoursTable extends Component {
    render() {
        return (
            <tbody>
            {this.props.hours.map((hour, i) => <MyDayHoursRow {...hour} onActionClick={this.props.onActionClick}
                                                              key={i}/>)}
            </tbody>
        )
    }
}

class MyDayHoursRow extends Component {


    getHourStatusLabel = () => {
        switch (this.props.status) {
            case 'HOUR_OFF':
                return (<span className="label label-success">Wolne</span>);
            case 'FREE_TIME':
                return (<span className="label label-info">Wolny czas pracy</span>);
            case 'APPOINTMENT':
                return (<span className="label label-danger">Wizyta</span>);
            default:
                return null;
        }
    };

    getAction = () => {
        switch (this.props.status) {
            case 'FREE_TIME':
                return (<Button>Nie pracuj</Button>);
            case 'APPOINTMENT':
                return (<Button>Rozpocznij</Button>);
            default:
                return null;
        }
    };


    render() {
        return (
            <tr>
                <td>
                    <span>{this.props.from}:00&rarr;</span>
                    <span>{this.props.to}:00</span>
                </td>
                <td>
                    {this.getHourStatusLabel()}
                </td>
                {/*<OptionDoctor status={this.props.status} onActionClick={this.props.onActionClick} from={this.props.from} to={this.props.to}/>*/}
                <td>
                    {this.getAction()}
                </td>
            </tr>
        )
    }
}


export default MyDay;