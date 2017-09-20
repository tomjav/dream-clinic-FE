import React, {Component} from 'react';
import OptionDoctor from "./OptionDoctor";
class HoursRow extends Component {


    getHourStatusLabel = () => {
        switch (this.props.status) {
            case 'HOUR_OFF':
                return (<span className="label label-success">wolne</span>);
            case 'FREE':
                return (<span className="label label-danger">wolny czas pracy</span>);
            case 'APPOINTMENT':
                return (<span className="label label-success">Success</span>);
            default:
                return null;
        }
    };


    render() {
        return (
            <tr>
                <td>
                    <span>{this.props.from}</span>
                    <span>{this.props.to}</span>
                </td>
                <td>{this.getHourStatusLabel()}</td>
                <OptionDoctor status={this.props.status} onActionClick={this.props.onActionClick} from={this.props.from} to={this.props.to}/>
            </tr>
        )
    }
}

export default HoursRow;