import React, {Component} from 'react';
import './style/Day.css';

class Calendar extends Component {

    render() {
        return (
            <div>
                {this.props.days.map((day, i) => <Day {...day} key={i}/>)}
            </div>
        )
    }
}

class Day extends Component {

    passStyle() {
        if (this.props.currentMonth) {
            return 'day-free';
        }
        return 'day-urgent';
    }

    render() {
        return (
            <div className={this.passStyle()}>
                <span>{this.props.dayNumber}</span>
            </div>
        );
    };
}

export default Calendar;