import React, {Component} from 'react';
import {Link} from "react-router-dom";
import LoginComponent from "../login/LoginComponent";
import LoggedAsSomeone from "../login/LoggedAsSomeone";

class MenuComponent extends Component {

    constructor(props){
        super(props);
        this.state = {logged: false}
    }

    handleLoggenIn = (status) => {
        console.log("Zalogowano");
        this.setState({logged: status});
    };


    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-home"></span></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <Link to="/">Strona główna</Link>
                        </li>
                        <li>
                            <Link to="/availability">Kalendarz</Link>
                        </li>
                        <li>
                            <Link to="/specialities">Umów wizytę</Link>
                        </li>
                        <li>
                            <Link to="/appointment">Wizyty</Link>
                        </li>
                        <li>
                            <Link to="/appointment">Moja dokumentacja</Link>
                        </li>
                    </ul>
                    {localStorage.getItem('token') === null &&
                        <LoginComponent handleLoggenIn={this.handleLoggenIn}/>
                    }
                    {localStorage.getItem('token') !== null &&
                    <LoggedAsSomeone handleLoggenIn={this.handleLoggenIn}/>
                    }
                </div>
            </nav>
        );
    };
}

export default MenuComponent;