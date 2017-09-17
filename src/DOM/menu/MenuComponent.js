import React, {Component} from 'react';
import {Link} from "react-router-dom";

class MenuComponent extends Component {

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
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
            </nav>
        );
    };
}

export default MenuComponent;