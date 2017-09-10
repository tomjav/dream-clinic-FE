import React, {Component} from 'react';
import Calendar from "./Calendar";
import Monthslider from "./Monthslider";
import CONSTANT from "../common/constants";
import HTTP from "../common/http";
import Dayplan from "./Dayplan";


class Availability extends Component {

    constructor(props) {
        super(props);
        this.state = {
            days: [],
            monthId: new Date().getMonth() + 1,
            year: new Date().getFullYear()
        };
        this.getDays();
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
        this.setState(newState);
        this.getDays();
    };

    changeDays = newDays => {
        this.setState(prevState => ({
            days: newDays
        }));
    };

    getDays() {
        HTTP.get(`${CONSTANT.APP_URL}/doctor/1/availability/workingdays`, {params: {month: this.state.monthId}},
            resp => this.changeDays(resp));
    }

    render() {
        console.log("AVAILABILITY RENDER");
        return (
            <div className="row">
                <div className="col-sm-6">
                    <Monthslider month={this.state.monthId} changeMonth={this.changeMonth}/>
                    <div className="table-bordered">
                        <Calendar days={this.state.days}/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <Dayplan/>
                </div>
            </div>
        );
    }
}


export default Availability;