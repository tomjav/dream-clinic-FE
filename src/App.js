import React, {Component} from 'react';
import './App.css';
import Availability from "./calendar/Availability";
import HomeComponent from "./DOM/home/HomeComponent";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MenuComponent from "./DOM/menu/MenuComponent";
import FooterComponent from "./DOM/footer/FooterComponent";
import SpecialityContainer from "./logic/speciality/Speciality";
import TopBarComponent from "./DOM/topbar/TopBarComponent";
import DoctorWrapper from "./logic/doctorlist/doctorwrapper";
import ProposeAppointmentWrapper from "./proposeAppoitment/proposeAppoitmentWrapper";
import * as moment from "moment";
import CONSTANT from "./common/constants";

class App extends Component {

    render() {

        moment.updateLocale('en', {
            months : CONSTANT.MONTH.splice(1)
        });

        Date.prototype.addMonths = function (value) {
            var n = this.getDate();
            this.setDate(1);
            this.setMonth(this.getMonth() + value);
            this.setDate(Math.min(n, this.getDaysInMonth()));
            return this;
        };


        return (
            <div>
                <TopBarComponent/>
                <Router>
                    <div>
                        <MenuComponent/>
                        <div className="container">
                            <Route exact path="/" component={HomeComponent}/>
                            <Route path="/availability" component={Availability}/>
                            <Route path="/specialities" component={SpecialityContainer}/>
                            <Route path="/doctors" component={DoctorWrapper}/>
                            <Route path="/propose/appointment" component={ProposeAppointmentWrapper}/>
                        </div>
                    </div>
                </Router>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;