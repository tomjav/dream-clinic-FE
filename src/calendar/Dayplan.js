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
        let date = new Date(this.props.year, this.props.month, this.props.day.dayNumber);
        HTTP.get(`/doctor/1/availability/hours`, {params: {date: date.toISOString()}},
            e => this.setState({hours: e}))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.day) {
            let date = new Date(nextProps.year, nextProps.month, nextProps.day.dayNumber);
            HTTP.get(`/doctor/1/availability/hours`, {params: {date: date.toISOString()}},
                e => this.setState({hours: e}))
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
    render() {
        return (
            <tr>
                <td>
                    <span>{this.props.from}</span>
                    <span>{this.props.to}</span>
                    <span>{this.props.status}</span>
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