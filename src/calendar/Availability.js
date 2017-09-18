import React, {Component} from 'react';
import Calendar from "./Calendar";
import Monthslider from "./Monthslider";
import HTTP from "../common/http";
import Dayplan from "./DayPlan/Dayplan";
import ArrayUtil from "../common/ArrayUtil";


class Availability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: [],
            monthId: new Date().getMonth() + 1,
            year: new Date().getFullYear(),
            clickedDays: []
        };
    }

    componentDidMount() {
        this.getDays(this.state.monthId);
    }

    changeMonth = way => {
        let newState;
        if (this.state.monthId + way > 12 || this.state.monthId + way < 1) {
            newState = {
                monthId: way < 0 ? 12 : 1,
                year: this.state.year + way
            };
        }
        else {
            newState = {
                monthId: this.state.monthId + way
            };
        }
        newState.clickedDays = [];
        this.setState(newState);
        this.getDays(newState.monthId);
    };

    changeDays = newDays => {
        this.setState(prevState => ({
            days: newDays
        }));
    };

    getDays(monthId) {
        HTTP.get(`/doctor/1/availability/workingdays`,
            resp => this.changeDays(resp), {month: monthId});
    }

    clickedDay = (el) => {
        let index = this.state.clickedDays.map(e => e.dayNumber).indexOf(el.dayNumber);
        if (index > -1) {
            this.setState(prevState => ({
                clickedDays: prevState.clickedDays.length == 1 ? [] : ArrayUtil.removeElement(this.state.clickedDays, e => e.dayNumber, el)
            }));
        } else {
            this.setState(prevState => ({
                clickedDays: prevState.clickedDays.concat(el)
            }));
        }
    };

    render() {
        console.log(this.state.clickedDays);
        return (
            <div className="row">
                <div className="col-sm-6">
                    <Monthslider month={this.state.monthId} changeMonth={this.changeMonth}/>
                    <Calendar selectDayFunction={this.clickedDay} days={this.state.days} month={this.state.monthId}/>
                </div>
                <div className="col-sm-6">
                    {this.state.clickedDays && this.state.clickedDays.length > 0 &&
                    <Dayplan day={this.state.clickedDays[this.state.clickedDays.length - 1]} year={this.state.year}
                             month={this.state.monthId}/>
                    }
                </div>
            </div>
        );
    }
}


export default Availability;