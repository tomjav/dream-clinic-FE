import React, {Component} from 'react';
import OptionDoctor from "./OptionDoctor";
class HoursRow extends Component {


    getHourStatusLabel = () => {
        switch (this.props.status) {
            case 'HOUR_OFF':
                return (<span className="label label-success">Godzina nie pracujaca</span>);
            case 'FREE_TIME':
                return (<span className="label label-info">Wolny czas pracy</span>);
            case 'APPOINTMENT':
                return (<span className="label label-danger">Wizyta</span>);
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
                <td>{this.getHourStatusLabel()}</td>
                <OptionDoctor status={this.props.status} onActionClick={this.props.onActionClick} from={this.props.from} to={this.props.to}/>
            </tr>
        )
    }
}

export default HoursRow;