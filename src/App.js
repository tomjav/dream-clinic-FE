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

class App extends Component {

    render() {
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
                        </div>
                    </div>
                </Router>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;