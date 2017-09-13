import React, {Component} from 'react';
import CONSTANT from "../common/constants";
import HTTP from "../common/http";

class Dayplan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: []
        };
    }

    componentDidMount() {
        this.getWorkingHours(this.props);
    }

    getWorkingHours(props){
        let date = `${props.year}-${props.month}-${props.day.dayNumber}`;
        HTTP.get(`/doctor/1/availability/hours`, {params: {date: date}},
            e => this.setState({hours: e}))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.day) {
            this.getWorkingHours(nextProps);
        }
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <DayBar day={this.props.day.dayOfWeek} date={this.props.day.dayNumber}/>
                    </thead>
                    <HoursTable hours={this.state.hours}/>
                </table>

            </div>
        );
    };
}

class HoursTable extends Component {
    render() {
        return (
            <tbody>
            {this.props.hours.map((hour, i) => <Hours {...hour} key={i}/>)}
            </tbody>
        )
    }
}

class Hours extends Component {

    getHourStatusLabel = () => {
        switch (this.props.status){
            case 'HOUR_OFF': return (<span className="label label-success">wolne</span>);
            case 'FREE': return (<span className="label label-danger">wolny czas pracy</span>);
            case 'APPOINTMENT': return (<span className="label label-success">Success</span>);
            default: return null;
        }
    }


    render() {
        return (
            <tr>
                <td>
                    <span>{this.props.from}</span>
                    <span>{this.props.to}</span>
                    <span>{this.getHourStatusLabel()}</span>
                </td>
            </tr>
        )
    }
}

const DayBar = (props) => {
    return (
        <tr>
            <th>{props.date} {CONSTANT.DAY[props.day]}</th>
        </tr>
    );
};


export default Dayplan;