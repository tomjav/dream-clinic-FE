import React, {Component} from 'react';
import './App.css';
import Availability from "./calendar/Availability";
import HomeComponent from "./home/HomeComponent";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <Route exact path="/" component={HomeComponent}/>
                    <Route path="/availability" component={Availability}/>
                </div>
            </Router>


        );
    }
}

export default App;