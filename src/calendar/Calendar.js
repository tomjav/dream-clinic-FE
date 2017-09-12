import React, {Component, PureComponent} from 'react';
import './style/Day.css';
import CONSTANT from "../common/constants";

class Calendar extends Component {

    render() {

        var arrays = [];

        for (let i = 0; i < 35; i += 7) {
            arrays.push(this.props.days.slice(i, i + 7));
        }

        return (
            <div className="table-bordered">
                <table className="table">
                    <WeekBar/>
                    <tbody>
                    {arrays.map((day, i) => <DayRow days={day} key={i} selectDayFunction={this.props.selectDayFunction}
                                                    month={this.props.month}/>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const DayRow = (props) => {
    return (
        <tr>
            {props.days.map((day, i) => <Day {...day} key={i} selectDayFunction={props.selectDayFunction}
                                             month={props.month}/>)}
        </tr>
    );
}

class Day extends PureComponent {

    state = {
        clicked: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.month !== this.props.month) {
            this.setState({clicked: false});
        }
    }

    passStyle() {
        let style = 'day';
        if (this.props.currentMonth) {
            style += ' free';
        }
        else {
            style += ' urgent';
        }
        if (this.state.clicked) {
            style += ' active';
        }
        return style;
    }

    handleClick = (event) => {
        if (!this.props.currentMonth) {
            return;
        }
        this.setState(prevState => ({
            clicked: true
        }));
        this.props.selectDayFunction(this.props);
    }

    render() {
        return (
            <td className={this.passStyle()} onClick={this.handleClick}>
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