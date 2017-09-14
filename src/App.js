import React, {Component} from 'react';
import './App.css';
import Availability from "./calendar/Availability";
import HomeComponent from "./home/HomeComponent";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MenuComponent from "./menu/MenuComponent";
import FooterComponent from "./footer/FooterComponent";
import SpecialityContainer from "./speciality/Speciality";
import TopBarComponent from "./topbar/TopBarComponent";

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
                        </div>
                    </div>
                </Router>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;