import React, {Component} from 'react';
import './style/Day.css';
import CONSTANT from "../common/constants";

class Calendar extends Component {

    render() {
        return (
            <table className="table">
                <WeekBar/>
                <tbody>
                <tr>
                    {this.props.days.slice(0, 7).map((day, i) => <Day {...day} key={i}/>)}
                </tr>
                <tr>
                    {this.props.days.slice(7, 14).map((day, i) => <Day {...day} key={i}/>)}
                </tr>
                <tr>
                    {this.props.days.slice(14, 21).map((day, i) => <Day {...day} key={i}/>)}
                </tr>
                <tr>
                    {this.props.days.slice(21, 28).map((day, i) => <Day {...day} key={i}/>)}
                </tr>
                <tr>
                    {this.props.days.slice(28, 35).map((day, i) => <Day {...day} key={i}/>)}
                </tr>
                <tr>
                    {this.props.days.slice(35).map((day, i) => <Day {...day} key={i}/>)}
                </tr>
                </tbody>
            </table>
        )
    }
}

class Day extends Component {

    passStyle() {
        if (this.props.currentMonth) {
            return 'day free';
        }
        return 'day urgent';
    }

    render() {
        return (
            <td className={this.passStyle()}>
                <span>{this.props.dayNumber}</span>
            </td>
        );
    };
}

const WeekBar = () => {
    return (
        <thead>
        <tr>
            {CONSTANT.DAY.map((day, i) => <th key={i}>{day}</th>)}
        </tr>
        </thead>
    );
};

export default Calendar;