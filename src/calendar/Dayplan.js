import React, {Component} from 'react';
import Calendar from "./Calendar";
import Monthslider from "./Monthslider";
import CONSTANT from "../common/constants";
import HTTP from "../common/http";

class Dayplan extends Component{

    hours = [
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'},
        {from: '8:00', to: '9:00'}
    ];

    render(){
        return (
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>info</th>
                </tr>
                </thead>
                <tbody>
                {this.hours.map((hour, i) => <tr><th key={i}>
                    {hour.from}<span>.................</span>
                    {hour.to}
                    </th></tr>)}
                </tbody>
            </table>
        );
    };
}

export default Dayplan;