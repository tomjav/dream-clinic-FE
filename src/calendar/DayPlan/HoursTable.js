import React, {Component} from 'react';
import HoursRow from "./HoursRow";

class HoursTable extends Component {
    render() {
        return (
            <tbody>
             {this.props.hours.map((hour, i) => <HoursRow {...hour} onActionClick={this.props.onActionClick} key={i}/>)}
            </tbody>
        )
    }
}

export default HoursTable;