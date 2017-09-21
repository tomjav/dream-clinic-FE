import React, {Component} from 'react';
import CONSTANT from "../../common/constants";
import HTTP from "../../common/http";
import HomeComponent from "../../DOM/home/HomeComponent";
import HoursTable from "./HoursTable";



class Dayplan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: []
        };
    }

    componentDidMount() {
        this.getWorkingHours(this.props);
    };

    getWorkingHours = () => {
        let date = `${this.props.year}-${this.props.month}-${this.props.day.dayNumber}`;
        HTTP.get(`/doctor/1/availability/hours`, e => this.setState({hours: e}), {date: date});
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.day) {
            this.getWorkingHours(nextProps);
        }
    };

    onActionClick = (dto) => {
        dto.date = `${this.props.year}-${this.props.month}-${this.props.day.dayNumber}`;
        HTTP.post(`/doctor/${CONSTANT.ID}/availability/hours`, this.getWorkingHours, dto);
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <thead>
                    <DayBar day={this.props.day.dayOfWeek} date={this.props.day.dayNumber}/>
                    <tr>
                        <th>Godzina</th>
                        <th>Status</th>
                        <th>Opcje</th>
                    </tr>
                    </thead>
                    <HoursTable hours={this.state.hours} onActionClick={this.onActionClick}/>
                </table>

            </div>
        );
    };
}

const DayBar = (props) => {
    return (
        <tr>
            <th>{props.date} {CONSTANT.DAY[props.day]}</th>
        </tr>
    );
};


export default Dayplan;